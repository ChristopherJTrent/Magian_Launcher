// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer} from 'electron'
import Profile from '../lib/data/Profile'

export type Channels = 'ipc-example';

const electronHandler = {
  ipcRenderer: {
    updateAshita: () => ipcRenderer.invoke('ashita:update') as Promise<void>,
    loadProfiles: () => ipcRenderer.invoke('magian:loadProfiles') as Promise<Profile[]>
  },
}

contextBridge.exposeInMainWorld('electron', electronHandler)

export type ElectronHandler = typeof electronHandler;
