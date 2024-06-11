import { existsSync } from "fs"
import { mkdir, writeFile } from "fs/promises"
import { MANAGED_SCRIPT_LOCATION } from "../Installation/paths"
import { generateManagedScript } from "../../data/Scripts"

export default async function saveScript(name:string, addons:string[]) {
  if(! existsSync(MANAGED_SCRIPT_LOCATION)) {
    await mkdir(MANAGED_SCRIPT_LOCATION)
  }
  try {
    await writeFile(
      `${MANAGED_SCRIPT_LOCATION}\\${name}.txt`, 
      generateManagedScript(name, addons),
      {flag: 'w+'})
  } catch {
    /* empty */
  }
}