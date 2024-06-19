import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import retail from "../util/Config/DefaultConfiguration"

// TODO: Remove this whole thing.

export type AshitaSettings_old = ReturnType<typeof retail>

const initialState:AshitaSettings_old = retail('default')

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
    receiveSettings: (state:AshitaSettings_old, action:PayloadAction<AshitaSettings_old>) => {
      // eslint-disable-next-line no-param-reassign
      state = action.payload
    },
    setValue: (state:AshitaSettings_old, action:PayloadAction<setvalArgs>) => {
		const v = state
		const v1 = v[action.payload.k0 as keyof typeof state]
		// known any, the code works, don't mess with it.
		const v2 = v1[action.payload.k1]
		// We're ignoring this one too.
		state[action.payload.k0 as keyof typeof state] = {
			...v1, [action.payload.k1 as keyof typeof v1]: {
				...v2, [action.payload.k2]: action.payload.value
			}
		}
    }
  }
})//

export const {setValue, receiveSettings} = AshitaSettingsSlice.actions

export default AshitaSettingsSlice.reducer
