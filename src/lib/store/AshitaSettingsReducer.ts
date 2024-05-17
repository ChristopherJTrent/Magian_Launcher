import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import retail from "../util/Config/DefaultConfiguration"

type AshitaSettings = ReturnType<typeof retail>

const initialState:AshitaSettings = retail('Managed_Retail')

export type setvalArgs = {
  k0:string
  k1:string
  k2:string
  value:any
}

export const AshitaSettingsSlice = createSlice({
  name: 'ashitaSettings',
  initialState,
  reducers: {
    setValue: (state:AshitaSettings, action:PayloadAction<setvalArgs>) => {
      state[action.payload.k0][action.payload.k1][action.payload.k2] = action.payload.value
    }
  }
})

