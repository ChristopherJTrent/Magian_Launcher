import { Button, Flex } from "@chakra-ui/react"
import { CheckIcon } from "@chakra-ui/icons"
import { createSelector } from "@reduxjs/toolkit"
import { useAppSelector } from "../../../../lib/store/store"

export default function AddonSaveButton() {
  const profile = useAppSelector(createSelector(state => state.profiles, profiles => profiles.list[profiles.currentProfile]))
  const settings = useAppSelector(state => state.ashitaSettings)
  return <Button marginTop='3px'
  width='100%' onClick={() => {
    window.electron.ipcRenderer.saveScript(profile)
    window.electron.ipcRenderer.saveProfile(profile, settings)
  }}>
<Flex>
  <h1>Save</h1>
  <CheckIcon marginLeft='10px'/>
</Flex>
</Button>
}
