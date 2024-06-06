import { mkdir, readFile, readdir, writeFile } from "fs/promises"
import { existsSync } from "fs"
import { CONFIGURATION_LOCATION, MANAGED_SCRIPT_LOCATION, PROFILE_LOCATION, SCRIPT_LOCATION } from "../Installation/paths"
import Profile from "../../data/Profile"
import { AshitaSettings } from "../../store/AshitaSettingsReducer"
import { dumpINI } from "../Config/INIHelper"
import { generateManagedScript } from "../../data/Scripts"

export async function loadProfiles():Promise<Profile[]> {
  return Promise.all((await readdir(PROFILE_LOCATION, {withFileTypes: true}))
    .filter(entry => {
      return entry.isDirectory()})
    .map(entry => `${PROFILE_LOCATION}\\${entry.name}\\profile.json`)
    .map(async path => JSON.parse((await readFile(path)).toString()) as Profile)
  )
}

export async function saveProfile(input:Profile, settings:AshitaSettings):Promise<void> {
  const PROFILE_DIR = `${PROFILE_LOCATION}\\${input.name}`
  if (!existsSync(PROFILE_DIR)) {
    await mkdir(PROFILE_DIR)
  }
  if (!existsSync(CONFIGURATION_LOCATION)) {
    await mkdir(CONFIGURATION_LOCATION)
  }
  try{
    await writeFile(`${PROFILE_DIR}\\profile.json`, JSON.stringify(input), { flag: 'w+'})
    await writeFile(
      `${CONFIGURATION_LOCATION}\\${input.name}.ini`, 
      dumpINI(settings), 
      {flag: 'w+'}
    )
    await writeFile(
      `${MANAGED_SCRIPT_LOCATION}\\${input.name}.txt`,
      generateManagedScript(input.name, input.enabledAddons),
      {flag: 'w+'}
    )
  } catch(e) { /* empty */ }
}

export async function initializeProfile(name: string):Promise<void> {
  if (!existsSync(PROFILE_LOCATION)) {
    await mkdir(PROFILE_LOCATION)
  }  
  if (!existsSync(`${PROFILE_LOCATION}\\${name}`)) {
    await mkdir(`${PROFILE_LOCATION}\\${name}`)
  }
  if (!existsSync(`${SCRIPT_LOCATION}\\${name}`)) {
    await mkdir(`${SCRIPT_LOCATION}\\${name}`)
  }
  ['beforePluginLoad','beforeAddonLoad','keybinds','addonInit'].forEach(async (v) => {
    const hookPath = `${SCRIPT_LOCATION}\\${name}\\${v}.txt`
    if(!existsSync(hookPath)) {
      try {
        await writeFile(hookPath, '', {flag: 'w+'})
      } catch {
        /* empty */
      }
    }
  })
}