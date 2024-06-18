import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export type flags = {
  settingsChanged: boolean
  scriptChanged: boolean
  loadSucceeded: boolean
  ashitaInstalled: boolean
  remainingHooks: number
}

const initialState:flags = {
  settingsChanged: false,
  scriptChanged: false,
  loadSucceeded: false,
  ashitaInstalled: false,
  remainingHooks: 0
}

export const flagsSettingsSlice = createSlice({
  name: 'flags',
  initialState,
  reducers: {
    changeSettings: (state) => {state.settingsChanged = true},
    changeScript: (state) => {state.scriptChanged = true},
    resetChangeScript: (state) => {state.scriptChanged = false},
    loadSucceed: (state) => {state.loadSucceeded = true},
    resetLoad: (state) => {state.loadSucceeded = false},
    ashitaFound: (state) => {state.ashitaInstalled = true},
    setRemainingHooks: (state, action:PayloadAction<number>) => {state.remainingHooks = action.payload}
  }
})

export const {
  changeSettings, 
  changeScript,
  resetChangeScript,
  loadSucceed, 
  resetLoad, 
  ashitaFound, 
  setRemainingHooks} = flagsSettingsSlice.actions

export default flagsSettingsSlice.reducer
