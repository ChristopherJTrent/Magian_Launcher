import { createSlice } from "@reduxjs/toolkit"

export type flags = {
  settingsChanged: boolean
  loadSucceeded: boolean
  ashitaInstalled: boolean
}

const initialState:flags = {
  settingsChanged: false,
  loadSucceeded: false,
  ashitaInstalled: false
}

export const flagsSettingsSlice = createSlice({
  name: 'flags',
  initialState,
  reducers: {
    changeSettings: (state) => {state.settingsChanged = true},
    loadSucceed: (state) => {state.loadSucceeded = true},
    ashitaFound: (state) => {state.ashitaInstalled = true}
  }
})

export const {changeSettings, loadSucceed, ashitaFound} = flagsSettingsSlice.actions

export default flagsSettingsSlice.reducer
