import { mkdir, readFile, readdir, writeFile } from "fs/promises"
import { CONFIGURATION_LOCATION, MANAGED_SCRIPT_LOCATION, PROFILE_LOCATION } from "../Installation/paths"
import Profile from "../../data/Profile"
import { AshitaSettings } from "../../store/AshitaSettingsReducer"
import { existsSync } from "fs"
import { dumpINI } from "../Config/INIHelper"

export async function loadProfiles():Promise<Profile[]> {
  const profiles:Profile[] = []
  const profileLocations = (await readdir(PROFILE_LOCATION, {withFileTypes: true}))
    .filter(entry => entry.isDirectory())
    .map(entry => `${entry.path}\\profile.json`)
  profileLocations.forEach(
    (v) => readFile(v).then(
      contents => profiles.push(JSON.parse(contents.toString()) as Profile)
    )
  )
  return profiles
}

export async function saveProfile(input:Profile, settings:AshitaSettings):Promise<void> {
  const PROFILE_DIR = `${PROFILE_LOCATION}\\${input.name}`
  if (!existsSync(PROFILE_DIR)) {
    await mkdir(PROFILE_DIR)
  }
  try{
    await writeFile(`${PROFILE_DIR}\\profile.json`, JSON.stringify(input), { flag: 'w+'})
    await writeFile(
      `${CONFIGURATION_LOCATION}\\${input.name}.ini`, 
      dumpINI(settings), 
      {flag: 'w+'}
    )
  }
}