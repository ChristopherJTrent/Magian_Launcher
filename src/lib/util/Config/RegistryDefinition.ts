import { registryKeys } from "./registry"

export type unused = (string|number|undefined)
export type toggle = (-1|0|1)

/**
 * It is not recommended to write these objects by hand.
 * @see registry.ts:22
 */
export type RegistryDefinition = {
  ['0000']?:(-1|0|1|2|3|4|5|6)
  ['0001']?:number
  ['0002']?:number
  ['0003']?:number
  ['0004']?:number
  ['0005']?:unused
  ['0006']?:unused
  ['0007']?:toggle
  ['0008']?:unused
  ['0009']?:unused
  ['0010']?:unused
  ['0011']?:(-1|0|1|2)
  ['0012']?: unused
  ['0013']?: unused
  ['0014']?: unused
  ['0015']?: unused
  ['0016']?: unused
  ['0017']?: toggle
  ['0018']?: (-1|0|1|2)
  ['0019']?: toggle
  ['0020']?: (-1|0|1|2|3)
  ['0021']?: toggle
  ['0022']?: toggle
  ['0023']?: toggle
  ['0024']?: unused
  ['0025']?: unused
  ['0026']?: unused
  ['0027']?: unused
  ['0028']?: number
  ['0029']?: (-1|12|13|14|15|16|17|18|19|20)
  ['0030']?: toggle
  ['0031']?: unused
  ['0032']?: unused
  ['0033']?: unused
  ['0034']?: (-1|0|1|2|3)
  ['0035']?: toggle
  ['0036']?: (-1|0|1|2)
  ['0037']?: number
  ['0038']?: number
  ['0039']?: toggle
  ['0040']?: toggle
  ['0041']?: toggle
  ['0042']?: string
  ['0043']?: toggle
  ['0044']?: toggle
  ['0045']?: unused
  padmode000: string
  padsin000: string
}

export type padModes = {
  enable: boolean
  rumble: boolean
  slider: boolean
  hats: boolean
  unfocused: boolean
  xinput: boolean
}

export const GamepadIndices = {
  AUTORUN: 0,
  MACRO_CTRL: 1,
  CHANGE_VIEW: 2,
  MACRO_ALT: 3,
  LOCK_ON: 4,
  CANCEL: 5,
  MAIN_MENU: 6,
  CONFIRM: 7,
  ACTIVE_WINDOW: 8,
  TOGGLE_UI: 9,
  MOVE_TO_MENU: 10,
  MOVE_TO_CAMERA: 11,
  LOGOUT: 12,
  MOVE_FORWARD: 13,
  MOVE_BACKWARD: 14,
  MOVE_LEFT: 15,
  MOVE_RIGHT: 16,
  CAMERA_UP: 17,
  CAMERA_DOWN: 18,
  CAMERA_LEFT: 19,
  CAMERA_RIGHT: 20,
  MENU_UP: 21,
  MENU_DOWN: 22,
  MENU_LEFT: 23,
  MENU_RIGHT: 24,
  SCREENSHOT: 25,
  TOGGLE_MOVEMENT: 26
}

// TODO: find someone who uses a dualshock/dualsense for this game to verify these.
export const DInputButtons = {
  NONE: -1,
  SQUARE: 0,
  CROSS: 1,
  CIRCLE: 2,
  TRIANGLE: 3,
  L1: 4,
  R1: 5,
  L2: 6,
  R2: 7,
  SELECT: 8,
  START: 9,
  L3: 10,
  R3: 11,
  PS_BUTTON: 12,
  TOUCHPAD: 13,
  MIC: 14,
  NOTHING: 15,
  BLANK: 16,
  LSTICK_LR: 32,
  LSTICK_UD: 33,
  RSTICK_LR: 34,
  RSTICK_UD: 37,
  DPAD_LR: 40,
  DPAD_UD: 41
}

export const XInputButtons = {
  NONE: -1,
  B: 0,
  X: 1,
  Y: 2,
  A: 3,
  RIGHT: 4,
  LEFT: 5,
  UP: 6,
  DOWN: 7,
  L1: 8,
  L2: 9,
  L3: 10,
  R1: 11,
  R2: 12,
  R3: 13,
  START: 14,
  BACK: 15,
  BLANK: 16,
  LSTICK_LEFT: -32,
  LSTICK_RIGHT: 32,
  LSTICK_UP: -33,
  LSTICK_DOWN: 33,
  RSTICK_LEFT: -35,
  RSTICK_RIGHT: 35,
  RSTICK_UP: -36,
  RSTICK_DOWN: 36
}
