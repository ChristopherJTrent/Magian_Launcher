/* eslint-disable jsx-a11y/label-has-associated-control */
import { Flex, Switch } from "@chakra-ui/react"
import { useAppDispatch, useAppSelector } from "../../lib/store/store"
import { setToggle } from "../../lib/store/GamepadSettings"

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


export default function GamepadEditor() {
  const flags = useAppSelector((state) => state.gamepad.toggles)
  const dispatch = useAppDispatch()
  return <Flex direction='row' flexWrap='wrap' justifyContent='space-around'>
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

}
