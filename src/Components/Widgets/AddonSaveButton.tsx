import { Button, Flex } from "@chakra-ui/react"
import { CheckIcon } from "@chakra-ui/icons"
import { useAppSelector } from "../../lib/store/store"

export default function AddonSaveButton() {
  const profile = useAppSelector(state => state.profiles.list[state.profiles.currentProfile])
  return <Button marginTop='3px' 
  width='100%' onClick={() => {
    window.electron.ipcRenderer.saveScript(
      profile.name,
      profile.enabledAddons
    )
  }}>
<Flex>
  <h1>Save</h1>
  <CheckIcon marginLeft='10px'/>
</Flex>
</Button>
}