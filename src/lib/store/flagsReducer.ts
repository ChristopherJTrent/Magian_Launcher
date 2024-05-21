import { createSlice } from "@reduxjs/toolkit"

export type flags = {
  settingsChanged: boolean
  loadSucceeded: boolean
}

const initialState:flags = {
  settingsChanged: false,
  loadSucceeded: false
}

export const flagsSettingsSlice = createSlice({
  name: 'flags',
  initialState,
  reducers: {
    changeSettings: (state) => {state.settingsChanged = true},
    loadSucceed: (state) => {state.loadSucceeded = true}
  }
})

export const {changeSettings, loadSucceed} = flagsSettingsSlice.actions

export default flagsSettingsSlice.reducer
