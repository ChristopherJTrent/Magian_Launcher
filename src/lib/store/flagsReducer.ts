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
    loadSucceed: (state) => {state.loadSucceeded = true},
    ashitaFound: (state) => {state.ashitaInstalled = true},
    setRemainingHooks: (state, action:PayloadAction<number>) => {state.remainingHooks = action.payload}
  }
})

export const {changeSettings, changeScript, loadSucceed, ashitaFound, setRemainingHooks} = flagsSettingsSlice.actions

export default flagsSettingsSlice.reducer
