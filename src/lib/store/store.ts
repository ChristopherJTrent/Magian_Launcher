import { configureStore } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import AshitaSettingsReducer from "./AshitaSettingsReducer"
import GamepadSettings from "./GamepadSettings"

export const store = configureStore({
	reducer: {
		ashitaSettings: AshitaSettingsReducer,
    gamepad: GamepadSettings
	}
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

