// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer} from 'electron'
import Profile from '../lib/data/Profile'
import { AshitaSettings_old } from '../lib/store/AshitaSettingsReducer'
import { AddonData } from '../lib/util/helpers/getExtensionData'

export type Channels = 'ipc-example';

const electronHandler = {
  ipcRenderer: {
    updateAshita: () => ipcRenderer.invoke('ashita:update') as Promise<void>,
    loadProfiles: () => ipcRenderer.invoke('magian:loadProfiles') as Promise<Profile[]>,
    getAddons: () => ipcRenderer.invoke('ashita:getAddons') as Promise<string[]>,
    getPlugins: () => ipcRenderer.invoke('ashita:getPlugins') as Promise<string[]>,
    saveScript: (profile:Profile) => ipcRenderer.invoke('ashita:saveScript', profile),
    // TODO: change to /2
    saveProfile: (profile:Profile, settings:AshitaSettings_old) => 
      ipcRenderer.invoke('magian:saveProfile', profile, settings),
    launchAshita: (profileName:string) => {
      ipcRenderer.invoke('magian:startAshita', profileName)
    },
    ensureGit: () => ipcRenderer.invoke('magian:ensureGit') as Promise<void>,
    getAddonData: (name: string) => ipcRenderer.invoke('ashita:getAddonData',name) as Promise<AddonData>
  },
}

contextBridge.exposeInMainWorld('electron', electronHandler)

export type ElectronHandler = typeof electronHandler;
