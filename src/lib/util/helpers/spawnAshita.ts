import * as sudo from 'sudo-prompt'
import { ASHITA_LOCATION } from '../Installation/paths'

export default async function spawnAshita(scriptName:string) {
  let script = scriptName
  if(!scriptName.endsWith('.ini')) {
    script += '.ini'
  }
  const options = {
    name: "Magian Launcher"
  }
  sudo.exec(`${ASHITA_LOCATION}\\ashita_cli.exe ${script}`, options)
}