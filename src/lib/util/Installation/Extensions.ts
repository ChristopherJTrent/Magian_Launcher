import { readdir } from "fs/promises"
import { ADDON_LOCATION, PLUGIN_LOCATION } from "./paths"

export async function getAddonList():Promise<string[]> {
  return (await readdir(ADDON_LOCATION, {withFileTypes: true}))
    .filter(entry => entry.isDirectory()
    ).map(entry => entry.name)
}
export async function getPluginList():Promise<string[]> {
  return (await readdir(PLUGIN_LOCATION, {withFileTypes: true}))
    .filter(entry => entry.isFile() && entry.name.endsWith('.dll'))
    .map(entry => entry.name)
}