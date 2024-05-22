import { getAshitaStatus, installAshita, pullAshita } from "../Git"

export default function updateAshita() {
  const ashitaStatus = getAshitaStatus()

  switch(ashitaStatus) {
  case 'uninstalled':
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
