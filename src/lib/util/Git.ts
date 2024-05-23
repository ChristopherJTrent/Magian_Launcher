import { SpawnSyncOptionsWithBufferEncoding, SpawnSyncReturns, spawnSync } from "child_process"
import { ASHITA_LOCATION } from "./Installation/paths"

const ASHITA_DOWNLOAD_TIMEOUT = 300_000

function spawnGitProcess(args:string[], opts?:SpawnSyncOptionsWithBufferEncoding):SpawnSyncReturns<Buffer> {
  const bat = spawnSync('git', args, {
    shell: 'powershell.exe',
    windowsHide: true,
    ...opts
  })
  return bat as typeof bat
}

export type installStatus = ('uninstalled'|'up-to-date'|'behind')

export function getAshitaStatus():installStatus {
  const result = spawnGitProcess([
    'status'
  ], {
    cwd: ASHITA_LOCATION
  })
  if (result.status) {
    return 'uninstalled'
  }
  if (result.stdout == null) {
    return 'uninstalled'
  }
  return /up to date/.test(result.stdout.toString()) ? 'up-to-date' : 'behind'
}

export function pullAshita() {
  spawnGitProcess([
    'pull',
    '--rebase'
  ], {
    cwd: ASHITA_LOCATION
  })
}

export function installAshita() {
  spawnGitProcess([
    `clone https://github.com/ashitaxi/ashita-v4beta.git "${ASHITA_LOCATION}"`,
  ], {
    timeout: ASHITA_DOWNLOAD_TIMEOUT
  })
}
