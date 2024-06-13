import { existsSync } from "fs"
import { mkdir, writeFile } from "fs/promises"
import { MANAGED_SCRIPT_LOCATION } from "../Installation/paths"
import { generateManagedScript } from "../../data/Scripts"
import Profile from "../../data/Profile"

export default async function saveScript(profile:Profile) {
  console.log(`Profile: ${profile ?? 'undefined'}`)
  Object.entries(profile).forEach(([k, v])=> {
    console.log(`${k}: ${v}`)
  })
  if(! existsSync(MANAGED_SCRIPT_LOCATION)) {
    await mkdir(MANAGED_SCRIPT_LOCATION)
  }
  try {
    const contents = generateManagedScript(profile.name, profile.enabledAddons, profile.enabledPlugins)
    console.log(contents)
    await writeFile(
      `${MANAGED_SCRIPT_LOCATION}\\${profile.name}.txt`, 
      contents)
  } catch {
    /* empty */
  }
}