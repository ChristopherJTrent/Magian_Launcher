// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer} from 'electron'

export type Channels = 'ipc-example';

const electronHandler = {
  ipcRenderer: {
    updateAshita: () => ipcRenderer.invoke('ashita:update') as Promise<void>
  },
}

contextBridge.exposeInMainWorld('electron', electronHandler)

export type ElectronHandler = typeof electronHandler;
