import { spawnSync } from "child_process"
import { app } from "electron"

export const INSTALL_LOCATION = `${app.getPath('home')}\\Magian Launcher`
export const ASHITA_LOCATION = `${INSTALL_LOCATION}\\Ashita`

export function hasGit():boolean {
  const bat = spawnSync('powershell.exe',[
    '-command',
    '(Get-Command git).path'
  ])

  return bat.status === 0
}
