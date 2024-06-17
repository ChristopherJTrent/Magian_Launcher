import { receiveProfiles } from "../../store/ProfileReducer"
import { receiveAddons } from "../../store/addonsReducer"
import { receiveplugins } from "../../store/pluginsReducer"
import { AppDispatch } from "../../store/store"
/**
 * Frontend
 */
export default async function handleApplicationLoad(dispatch: AppDispatch) {
  const ipc = window.electron.ipcRenderer
  const tasks:(()=>Promise<void>)[] = [
    async () => {ipc.ensureGit()},
    async () => {ipc.updateAshita()},
    async () => {dispatch(receiveProfiles(await ipc.loadProfiles()))},
    async () => {dispatch(receiveAddons(await ipc.getAddons()))},
    async () => {dispatch(receiveplugins(await ipc.getPlugins()))}
  ]
  await ipc.updateAshita()
  dispatch(receiveProfiles(await ipc.loadProfiles()))
  dispatch(receiveAddons(await ipc.getAddons()))

}