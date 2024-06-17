import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export type LoaderHook = {
  name: string
  func: Function
}
export type LoaderState = {
  currentHook: string
  hooks: LoaderHook[]
}

const initialState:LoaderState = {
  currentHook: '',
  hooks: []
}

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    receiveHooks: (state, action:PayloadAction<LoaderHook[]>) => {state.hooks = action.payload},
    receiveHook: (state, action:PayloadAction<LoaderHook>) => {state.hooks.push(action.payload)},
    shiftHook: (state) => {state.hooks = state.hooks.slice(1)}
  }
})

export const {receiveHooks, receiveHook, shiftHook} = loaderSlice.actions