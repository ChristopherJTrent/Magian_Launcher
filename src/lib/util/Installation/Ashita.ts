import { getAshitaStatus, installAshita, pullAshita } from "../Git"
import ensureInstallLocation from "./Launcher"
import { INSTALL_LOCATION } from "./paths"

export default async function updateAshita() {
  ensureInstallLocation()
  console.log(INSTALL_LOCATION)
  const ashitaStatus = getAshitaStatus()
  console.log(ashitaStatus)
  switch(ashitaStatus) {
  case 'uninstalled':
    console.log('installing ashita')
    installAshita()
    break
  case 'behind':
    pullAshita()
    break
  // next two lines aren't necessary, but explicit is better.
  case "up-to-date":
  default:
  }
}
