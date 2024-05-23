import { IpcMain, IpcMainInvokeEvent } from "electron"
import updateAshita from "../lib/util/Installation/Ashita"

type IPCHandler = {channel: string, listener: (event:IpcMainInvokeEvent, ...args: any[]) => Promise<void>}

export default function registerIPCCallbacks(ipcMain:IpcMain):void {
  const handlers:IPCHandler[] = [
    {
      channel: 'ashita:update',
      listener: async (_) => {
        updateAshita()
      }
    }
  ]
  handlers.forEach((v) => ipcMain.handle(v.channel, v.listener))
}