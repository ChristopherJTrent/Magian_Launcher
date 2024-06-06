import { configureStore } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import AshitaSettingsReducer from "./AshitaSettingsReducer"
import GamepadSettings from "./GamepadSettings"
import flagsReducer from "./flagsReducer"
import addonsReducer from "./addonsReducer"
import ProfileReducer from "./ProfileReducer"

export const store = configureStore({
	reducer: {
		ashitaSettings: AshitaSettingsReducer,
    gamepad: GamepadSettings,
    flags: flagsReducer,
    addons: addonsReducer,
    profiles: ProfileReducer
	}
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

