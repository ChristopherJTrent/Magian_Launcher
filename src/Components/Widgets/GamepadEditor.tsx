/* eslint-disable jsx-a11y/label-has-associated-control */
import { EditIcon } from "@chakra-ui/icons"
import { Button, Flex, Switch } from "@chakra-ui/react"
import { useState } from "react"

export default function GamepadEditor() {
  const [gamepadSettings, setGamepadSettings] = useState([0,0,0,0,0,0])
  function setFlag(index:number, value:(1|0)) {
    const temp = gamepadSettings
    temp[index] = value
    setGamepadSettings(temp)
  }
  return <>
  <Button>Gamepad Settings <EditIcon /></Button>
	<Flex direction='column'>
		<label>Enable Gamepad
		  <Switch id="enableGamepad" 
        isChecked={gamepadSettings[0] === 0}
        onChange={(e) =>  setFlag(0, e.target.checked ? 1 : 0)}/>
    </label>
    
	</Flex>
  </>
}
