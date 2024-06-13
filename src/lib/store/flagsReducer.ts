import { createSlice } from "@reduxjs/toolkit"

export type flags = {
  settingsChanged: boolean
  scriptChanged: boolean
  loadSucceeded: boolean
  ashitaInstalled: boolean
}

const initialState:flags = {
  settingsChanged: false,
  scriptChanged: false,
  loadSucceeded: false,
  ashitaInstalled: false
}

export const flagsSettingsSlice = createSlice({
  name: 'flags',
  initialState,
  reducers: {
    changeSettings: (state) => {state.settingsChanged = true},
    changeScript: (state) => {state.scriptChanged = true},
    loadSucceed: (state) => {state.loadSucceeded = true},
    ashitaFound: (state) => {state.ashitaInstalled = true}
  }
})

export const {changeSettings, changeScript, loadSucceed, ashitaFound} = flagsSettingsSlice.actions

export default flagsSettingsSlice.reducer
