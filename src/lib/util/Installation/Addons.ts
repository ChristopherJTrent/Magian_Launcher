import { readdir } from "fs/promises"
import { existsSync } from "fs"
import { ADDON_LOCATION } from "./paths"

export default async function getAddonList():Promise<string[]> {
  return (await readdir(ADDON_LOCATION, {withFileTypes: true}))
    .filter(entry => entry.isDirectory()
    ).map(entry => entry.name)
}