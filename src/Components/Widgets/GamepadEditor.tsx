/* eslint-disable jsx-a11y/label-has-associated-control */
import { EditIcon } from "@chakra-ui/icons"
import { Button, Flex, Switch } from "@chakra-ui/react"
import { useAppDispatch, useAppSelector } from "../../lib/store/store"
import { setToggle } from "../../lib/store/GamepadSettings"

export default function GamepadEditor() {
  const flags = useAppSelector((state) => state.gamepad.toggles)
  const dispatch = useAppDispatch()
  return <>
  <Button>Gamepad Settings <EditIcon /></Button>
	<Flex direction='row' flexWrap='wrap' justifyContent='space-around'>
		<label>Enable Gamepad
		  <Switch id="enableGamepad" 
        isChecked={flags.enabled}
        onChange={() => dispatch(setToggle({
          name:'enabled',
          value: !flags.enabled
        }))}/>
    </label>
    <label> Enable Rumble
      <Switch 
        isChecked={flags.rumble}
        onChange={() => dispatch(setToggle({
          name:'rumble',
          value: !flags.rumble
        }))} />
    </label>
	</Flex>
  </>
}
