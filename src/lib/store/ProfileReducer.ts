import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit"
import Profile from "../data/Profile"
import { type RootState } from "./store"

export type profilesMapping = {
  currentProfile:string
  list: {[name:string]: Profile}
}

const initialState:profilesMapping = {
  currentProfile: 'default',
  list: {
    'default': {name: 'default', enabledAddons: []}
  }
}

export const addonEnabled = (name:string) => 
  createSelector((state:RootState) => state.profiles,
    profiles => 
      profiles.list[profiles.currentProfile].enabledAddons.includes(name)
)

export const profileSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    receiveProfiles: (state: profilesMapping, action: PayloadAction<Profile[]>) => {
      state.list = {}
      action.payload.forEach((v) => {
        state.list[v.name] = {name:v.name, enabledAddons:v.enabledAddons}
      })
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
      const idx = state.list[state.currentProfile].enabledAddons.findIndex(v => v === action.payload)
      if (idx !== -1) {
        delete state.list[state.currentProfile].enabledAddons[idx]
      }
    }
  }
})

export const {receiveProfiles, receiveProfile, setAddonEnabled, setAddonDisabled} = profileSlice.actions

export default profileSlice.reducer