import { IpcMain, IpcMainInvokeEvent } from "electron"
import updateAshita from "../lib/util/Installation/Ashita"
import { loadProfiles, saveProfile } from "../lib/util/IO/ProfileLoader"
import getAddonList from "../lib/util/Installation/Addons"
import Profile from "../lib/data/Profile"
import { AshitaSettings } from "../lib/store/AshitaSettingsReducer"
import spawnAshita from "../lib/util/helpers/spawnAshita"
import saveScript from "../lib/util/IO/AddonLoader"

type IPCHandler = {channel: string, listener: (event:IpcMainInvokeEvent, ...args: any[]) => Promise<any>}

export default function registerIPCCallbacks(ipcMain:IpcMain):void {
  const handlers:IPCHandler[] = [
    {
      channel: 'ashita:update',
      listener: async (_) => {
        updateAshita()
      }
    },
    {
      channel: 'magian:loadProfiles',
      listener: async (_) => {
        return loadProfiles()
      }
    },
    {
      channel: 'magian:saveProfile',
      listener: async (_, profile:Profile, settings:AshitaSettings) => {
        await saveProfile(profile, settings)
      }
    },
    {
      channel: 'ashita:getAddons',
      listener: async (_) => {
        return getAddonList()
      }
    },
    {
      channel: 'ashita:saveScript',
      listener: async (_, name, addons) => {
        console.log('saving addons')
        await saveScript(name, addons)
      }
    },
    {
      channel: 'magian:startAshita',
      listener: async (_, name:string) => {
        spawnAshita(name)
      }
    }
  ]
  handlers.forEach((v) => ipcMain.handle(v.channel, v.listener))
}