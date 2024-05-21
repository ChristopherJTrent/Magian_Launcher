import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { xinputDefault } from "../util/Config/DefaultConfiguration"
import { GamepadState } from "./GamepadState"

const initialState:GamepadState = xinputDefault

export type setToggleParams = {
  name: string
  value: boolean
}

export type setBindingParams = {
  name: string,
  value: number
}

export const gamepadSlice = createSlice({
  name: 'gamepad',
  initialState,
  reducers: {
    setToggle: (state: GamepadState, action: PayloadAction<setToggleParams>) => {
      state.toggles[action.payload.name as keyof typeof state.toggles]
        = action.payload.value
    },
    setBinding: (state: GamepadState, action: PayloadAction<setBindingParams>) => {
      state.bindings[action.payload.name as keyof typeof state.bindings]
        = action.payload.value
    },
  }
})

export const {setToggle, setBinding} = gamepadSlice.actions

export default gamepadSlice.reducer
