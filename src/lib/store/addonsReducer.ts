import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export type addonsMapping = string[]

// this will change in the future when repos are fully implemented.
const initialState:addonsMapping = []

export const addonsSlice = createSlice({
  name: 'addons',
  initialState,
  reducers: {
    receiveAddons:  (state: addonsMapping, action: PayloadAction<string[]>) => {
      action.payload.forEach((v, i) => {state[i] = v})
    }
  }
})

export const {receiveAddons} = addonsSlice.actions

export default addonsSlice.reducer

