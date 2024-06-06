import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import Profile from "../data/Profile"

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
    }
  }
})

export const {receiveProfiles, receiveProfile} = profileSlice.actions

export default profileSlice.reducer