/* eslint-disable jsx-a11y/label-has-associated-control */
import { EditIcon } from "@chakra-ui/icons"
import { Button, Flex, Switch } from "@chakra-ui/react"
import React, { useState } from "react"

export default function GamepadEditor() {
  const [gamepadSettings, setGamepadSettings] = useState([0,0,0,0,0,0])
  function setFlag(index:number, evt: React.ChangeEvent<HTMLInputElement>) {
    const temp = gamepadSettings
    temp[index] = gamepadSettings[index] === 0 ? 1 : 0
    console.log(temp)
    setGamepadSettings(temp)
  }
  return <>
  <Button>Gamepad Settings <EditIcon /></Button>
	<Flex direction='row' flexWrap='wrap' justifyContent='space-around'>
		<label>Enable Gamepad
		  <Switch id="enableGamepad" 
        isChecked={gamepadSettings[0] == 1}
        onChange={(e) =>  setFlag(0, e)}/>
    </label>
    <label> Enable Rumble
      <Switch 
        isChecked={gamepadSettings[1] === 1}
        onChange={(e) => setFlag(1, e)} />
    </label>
	</Flex>
  </>
}
