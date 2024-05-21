import { spawnSync } from "child_process"

export const INSTALL_LOCATION = `${process.env.APPDATA}\\Magian Launcher`
export const ASHITA_LOCATION = `${INSTALL_LOCATION}\\Ashita`

export function hasGit():boolean {
  const bat = spawnSync('powershell.exe',[
    '-command',
    '(Get-Command git).path'
  ])

  return bat.status === 0
}
