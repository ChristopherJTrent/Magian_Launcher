import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit"
import Profile from "../data/Profile"
import { type RootState } from "./store"
import { initialProfiles, profilesMapping } from "../data/DefaultProfile"

export const addonEnabled = (name:string) => 
  createSelector((state:RootState) => state.profiles,
    profiles => {
      console.log(profiles.list[profiles.currentProfile])
      return profiles.list[profiles.currentProfile].enabledAddons?.includes(name) ?? false
    }
)

export const pluginEnabled = (name:string) => 
  createSelector((state:RootState) => state.profiles,
    profiles => 
      profiles.list[profiles.currentProfile].enabledPlugins?.includes(name) ?? true
)

export const profileSlice = createSlice({
  name: 'profiles',
  initialState:initialProfiles,
  reducers: {
    receiveProfiles: (state: profilesMapping, action: PayloadAction<Profile[]>) => {
      state.list = {}
      action.payload.forEach((v) => {
        state.list[v.name] = {name:v.name, enabledAddons:v.enabledAddons, enabledPlugins:v.enabledPlugins ?? []}
      })
      console.log(state.list)
    },
    receiveProfile: (state:profilesMapping, action: PayloadAction<Profile>) => {
      state.list[action.payload.name] = action.payload
    },
    setAddonEnabled: (state:profilesMapping, action:PayloadAction<string>) => {
      if(!state.list[state.currentProfile].enabledAddons.includes(action.payload)) {
        state.list[state.currentProfile].enabledAddons = [
          ...state.list[state.currentProfile].enabledAddons,
          action.payload
        ]
      }
    },
    setAddonDisabled: (state:profilesMapping, action:PayloadAction<string>) => {
      state.list[state.currentProfile].enabledAddons = 
        state.list[state.currentProfile].enabledAddons.filter(addon => addon !== action.payload)
    },    
    setPluginEnabled: (state:profilesMapping, action:PayloadAction<string>) => {
      if(!state.list[state.currentProfile].enabledPlugins?.includes(action.payload)) {
        state.list[state.currentProfile].enabledPlugins = [
          ...state.list[state.currentProfile].enabledPlugins,
          action.payload
        ]
      }
    },
    setPluginDisabled: (state:profilesMapping, action:PayloadAction<string>) => {
      state.list[state.currentProfile].enabledPlugins = 
        state.list[state.currentProfile].enabledPlugins.filter(plugin => plugin !== action.payload)
    }
  }
})

export const {
  receiveProfiles, 
  receiveProfile, 
  setAddonEnabled, 
  setAddonDisabled,
  setPluginEnabled,
  setPluginDisabled
} = profileSlice.actions

export default profileSlice.reducer