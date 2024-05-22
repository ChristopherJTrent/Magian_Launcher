import { createSlice } from "@reduxjs/toolkit"
import { ASHITA_LOCATION } from "../util/Installation/paths"

const fs = window.require('fs')

export type addonsMapping = {[id: number]: string}

// this will change in the future when repos are fully implemented.
const initialState:addonsMapping = {}

export const addonsSlice = createSlice({
  name: 'addons',
  initialState,
  reducers: {
    loadAddons: (state) => {
      const list = fs.readdirSync(`${ASHITA_LOCATION}\\addons`)
      list.forEach((v:string, i:number)  => {
        state[i] = v
      })
    }
  }
})

export const {loadAddons} = addonsSlice.actions

export default addonsSlice.reducer

