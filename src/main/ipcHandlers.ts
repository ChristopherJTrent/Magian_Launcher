import { IpcMain, IpcMainInvokeEvent } from "electron"
import updateAshita from "../lib/util/Installation/Ashita"
import { loadProfiles } from "../lib/util/IO/ProfileLoader"
import getAddonList from "../lib/util/Installation/Addons"

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
      channel: 'ashita:getAddons',
      listener: async() => {
        return getAddonList()
      }
    }
  ]
  handlers.forEach((v) => ipcMain.handle(v.channel, v.listener))
}