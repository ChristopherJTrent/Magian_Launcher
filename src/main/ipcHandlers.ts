import { IpcMain, IpcMainInvokeEvent } from "electron"
import updateAshita from "../lib/util/Installation/Ashita"
import { loadProfiles, saveProfile } from "../lib/util/IO/ProfileLoader"
import {getAddonList, getPluginList} from "../lib/util/Installation/Extensions"
import Profile from "../lib/data/Profile"
import { AshitaSettings_old } from "../lib/store/AshitaSettingsReducer"
import spawnAshita from "../lib/util/helpers/spawnAshita"
import saveScript from "../lib/util/IO/ScriptLoader"
import { ensureGit } from "../lib/util/Installation/paths"
import { getAddonData } from "../lib/util/helpers/getExtensionData"

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
      listener: async (_, profile:Profile, settings:AshitaSettings_old) => {
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
      channel: 'ashita:getAddonData',
      listener: async (_, name) => {
        return getAddonData(name)
      }
    },
    {
      channel: 'ashita:getPlugins',
      listener: async (_) => {
        return getPluginList()
      }
    },
    {
      channel: 'ashita:saveScript',
      listener: async (_, profile) => {
        await saveScript(profile)
      }
    },
    {
      channel: 'magian:startAshita',
      listener: async (_, name:string) => {
        spawnAshita(name)
      }
    },
    {
      channel: 'magian:ensureGit',
      listener: async (_) => {
        ensureGit()
      }
    }
  ]
  handlers.forEach((v) => ipcMain.handle(v.channel, v.listener))
}