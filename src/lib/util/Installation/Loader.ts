import Addon from "../../data/Addon"
import { receiveProfiles } from "../../store/ProfileReducer"
import { receiveAddon, receiveAddons } from "../../store/addonsReducer"
import { LoaderHook, receiveHook, receiveHooks } from "../../store/loaderReducer"
import { receiveplugins } from "../../store/pluginsReducer"
import { AppDispatch, store } from "../../store/store"
/**
 * Frontend
 */
export default async function handleApplicationLoad(dispatch: AppDispatch) {
  dispatch(receiveAddons([]))
  if(store.getState().flags.loadSucceeded) {
    return
  }
  const ipc = window.electron.ipcRenderer
  const tasks:LoaderHook[] = [
    {
      name: 'Ensure Git',
      func: async () => {ipc.ensureGit()},
    },
    {
      name: 'Update Ashita',
      func: async () => {ipc.updateAshita()},
    },
    {
      name: 'Load Profiles',
      func: async () => {dispatch(receiveProfiles(await ipc.loadProfiles()))},
    },
    {
      name: 'Load Addons',
      func:async () => {
        const addons = await ipc.getAddons()
        addons.forEach(addon => {
          dispatch(receiveHook({
            name: `Get Addon Data: ${addon}`,
            func: async () => {
              const addonData = await ipc.getAddonData(addon)
              dispatch(receiveAddon(new Addon(addon, addonData.author, addonData.version, addonData.desc, addonData.link)))
            }
          }))
        })
      }
    },
    {
      name: 'Load Plugins',
      func: async () => {dispatch(receiveplugins(await ipc.getPlugins()))}
    },
  ]
  dispatch(receiveHooks(tasks))
}