/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Editable, Flex, Select, Switch } from "@chakra-ui/react"
import { useAppDispatch, useAppSelector } from "../../lib/store/store"
import { setBinding, setToggle } from "../../lib/store/GamepadSettings"
import { DInputBindings, DInputButtons, XInputBindings, XInputButtons } from "../../lib/util/Config/RegistryDefinition"

type UIDef = {
  key: string
  label: string

}

const toggleUIDefs:UIDef[] = [
  {
    key: 'enabled',
    label:'Enable Gamepad'
  },
  {
    key: 'rumble',
    label: 'Enable Rumble'
  },
  {
    key:'sliders',
    label:'Enable Sliders'
  },
  {
    key: 'hats',
    label: 'Enable Hat Switches'
  },
  {
    key: 'inactive',
    label:'Enable Input when Inactive'
  },
  {
    key: 'xinput',
    label: 'XInput (Xbox)'
  }
]

const bindingUIDefs:UIDef[] = [
  {
    key: 'autorun',
    label: 'Autorun'
  },
  {
    key: 'macroCtrl',
    label: 'Macro Palette (CTRL)'
  },

]
export default function GamepadEditor() {



  const flags = useAppSelector((state) => state.gamepad.toggles)
  const bindings = useAppSelector((state) => state.gamepad.bindings)
  const dispatch = useAppDispatch()
  return <>
    <Flex direction='row' flexWrap='wrap' justifyContent='space-around'>
      {
        toggleUIDefs.map((v) => (
          <label style={{width: '45%'}}>
            <Switch
              isChecked={flags[v.key as keyof typeof flags]}
              onChange={() => dispatch(setToggle({
                name: v.key,
                value: !(flags[v.key as keyof typeof flags])
              }))} marginRight='8px' />
              {v.label}
          </label>
        ))
      }
    </Flex>
    <Flex direction='column' alignContent='center'>
      {
        bindingUIDefs.map((v) => (
          <>
            <h2>{v.label}:</h2>
            <Select variant='outline'
              value={bindings[v.key as keyof typeof bindings]}
              onChange={(e) => {
                dispatch(setBinding({
                  name:v.key,
                  value: Number(e.target.value) // this will always be a number.
              }))
            }}>
              {
                Object.entries(flags.xinput ? XInputButtons : DInputButtons).map(([_, v1]) => (
                  <option value={v1}>{
                    flags.xinput
                      ? XInputBindings[v1 as keyof typeof XInputBindings]
                      : DInputBindings[v1 as keyof typeof DInputBindings]
                    }</option>
                ))
              }
            </Select>
          </>
        ))
      }
    </Flex>
  </>
}
