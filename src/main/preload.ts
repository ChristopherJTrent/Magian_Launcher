// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer} from 'electron'
import Profile from '../lib/data/Profile'
import { AshitaSettings } from '../lib/store/AshitaSettingsReducer';

export type Channels = 'ipc-example';

const electronHandler = {
  ipcRenderer: {
    updateAshita: () => ipcRenderer.invoke('ashita:update') as Promise<void>,
    loadProfiles: () => ipcRenderer.invoke('magian:loadProfiles') as Promise<Profile[]>,
    getAddons: () => ipcRenderer.invoke('ashita:getAddons') as Promise<string[]>,
    getPlugins: () => ipcRenderer.invoke('ashita:getPlugins') as Promise<string[]>,
    saveScript: (profile:Profile) => ipcRenderer.invoke('ashita:saveScript', profile),
    saveProfile: (profile:Profile, settings:AshitaSettings) => 
      ipcRenderer.invoke('magian:saveProfile', profile, settings)
  },
}

contextBridge.exposeInMainWorld('electron', electronHandler)

export type ElectronHandler = typeof electronHandler;
