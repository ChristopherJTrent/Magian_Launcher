import { existsSync } from "fs"
import { spawnSync } from "child_process"
import { ASHITA_LOCATION } from "./paths"
import { getAshitaStatus } from "../Git"

const ASHITA_DOWNLOAD_TIMEOUT = 30_000

export default function updateAshita() {
  const ashitaStatus = getAshitaStatus()

  switch(ashitaStatus) {
  case 'uninstalled': 
    
  }
  if () {
    const bat = spawnSync(
      'git',
      [
        'pull',
        '--rebase'
      ], 
      {
        cwd: ASHITA_LOCATION,
        shell: 'powershell.exe',
        windowsHide: true
      }
    )

  } else {
    const bat = spawnSync('git', 
      [
        'clone',
        'https://github.com/AshitaXI/Ashita-v4beta.git',
        ASHITA_LOCATION
      ],
      {
        timeout: ASHITA_DOWNLOAD_TIMEOUT,
        shell: 'powershell.exe'
      }
    )
  }
}