import { ASHITA_LOCATION } from '../Installation/paths'
import { spawnSync } from 'child_process'

export default async function spawnAshita(scriptName:string) {
  console.log(scriptName)
  console.log(ASHITA_LOCATION)
  const bat = spawnSync(
    'Start-Process',
    [
      '-FilePath',
      `"${ASHITA_LOCATION}\\ashita-cli.exe"`,
      '-WorkingDirectory',
      `"${ASHITA_LOCATION}"`,
      '-Args',
      `managed/${scriptName}.ini`,
      '-Verb',
      'RunAs'
    ],
    {
      shell: 'powershell.exe',
      windowsHide: false
    }
  )
  console.log(bat.output.toString())
}