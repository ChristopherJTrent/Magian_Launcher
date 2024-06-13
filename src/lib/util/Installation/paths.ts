import { spawnSync } from "child_process"
import { app } from "electron"

export const INSTALL_LOCATION = `${app.getPath('home')}\\Magian Launcher`
export const ASHITA_LOCATION = `${INSTALL_LOCATION}\\Ashita`
export const PROFILE_LOCATION = `${INSTALL_LOCATION}\\Profiles`
export const CONFIGURATION_LOCATION = `${ASHITA_LOCATION}\\config\\boot\\managed`
export const SCRIPT_LOCATION = `${ASHITA_LOCATION}\\scripts`
export const MANAGED_SCRIPT_LOCATION = `${SCRIPT_LOCATION}\\managed`
export const ADDON_LOCATION = `${ASHITA_LOCATION}\\addons`
export const PLUGIN_LOCATION = `${ASHITA_LOCATION}\\plugins`

export function hasGit():boolean {
  const bat = spawnSync('powershell.exe',[
    '-command',
    '(Get-Command git).path'
  ])

  return bat.status === 0
}
