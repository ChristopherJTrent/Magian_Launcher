import { spawn } from "child_process"
import { setTimeout } from "timers/promises"

export const INSTALL_LOCATION = `${process.env.APPDATA}\\Magian Launcher`
export const ASHITA_LOCATION = `${INSTALL_LOCATION}\\Ashita`

export async function hasGit():Promise<boolean> {
  const bat = spawn('powershell.exe',[
    '-command',
    '(Get-Command git).path'
  ])
  let success: boolean|undefined
  let done = false
  bat.stdout.on('data', () => {success = true})
  bat.stderr.on('data', () => {success = false})
  bat.on('exit', () => {done = true})

  while(!done) {
    // eslint-disable-next-line no-await-in-loop
    await setTimeout(10)
  }

  return success ?? false
}
