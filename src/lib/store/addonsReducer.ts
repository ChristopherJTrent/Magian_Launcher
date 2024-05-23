import { createSlice } from "@reduxjs/toolkit"

export type addonsMapping = {[id: number]: string}

// this will change in the future when repos are fully implemented.
const initialState:addonsMapping = {}

export const addonsSlice = createSlice({
  name: 'addons',
  initialState,
  reducers: {
  }
})

export default addonsSlice.reducer

