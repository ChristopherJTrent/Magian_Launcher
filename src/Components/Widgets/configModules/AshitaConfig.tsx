import { AccordionItem, AccordionPanel, Divider, Editable, EditableInput, Flex, Select, Switch, Text } from "@chakra-ui/react"
import AccordButton from "../AccordButton"
import { useAppDispatch, useAppSelector } from "../../../lib/store/store"
import { currentProfile, setSettingsValue } from "../../../lib/store/ProfileReducer"
import CustomEditablePreview from "../customEditablePreview"
import EditableControls from "../EditableControls"

export default function AshitaConfig() {
  const profile = useAppSelector(currentProfile)
  const dispatch = useAppDispatch()
  return <AccordionItem>
    <AccordButton>
      Ashita
    </AccordButton>
    <AccordionPanel>
      <Text fontSize='12pt' fontStyle='oblique'>
        Boot Settings
      </Text>
      <Divider marginBottom='5px'/>
      {
        profile.serverType === 'private' 
        && <>
          <Flex direction='row' align='center'>
            <Text as='h2' style={{textTransform: 'capitalize'}}>Boot File: </Text>
            <Editable defaultValue={profile.settings.bootFile}
              onSubmit={(next) => dispatch(setSettingsValue({field: 'bootFile', value: next}))}
              width='100%'>
                <Flex direction='row' justifyContent='space-between'>
                  <CustomEditablePreview />
                  <EditableInput wordBreak='break-all' />
                  <EditableControls />
                </Flex>
            </Editable>
          </Flex>
          <Flex direction='row' align='center'>
            <Text as='h2' style={{textTransform: 'capitalize'}}>Boot Command: </Text>
            <Editable defaultValue={profile.settings.bootCommand}
              onSubmit={(next) => dispatch(setSettingsValue({field: 'bootCommand', value: next}))}
              width='100%'>
                <Flex direction='row' justifyContent='space-between'>
                  <CustomEditablePreview />
                  <EditableInput wordBreak='break-all' />
                  <EditableControls />
                </Flex>
            </Editable>
          </Flex>
          <Flex direction='row' align='center'>
            <Text as='h2' style={{textTransform: 'capitalize'}}>Game Module</Text>
            <Editable defaultValue={profile.settings.bootGameModule}
              onSubmit={(next) => dispatch(setSettingsValue({field: 'bootGameModule', value: next}))}
              width='100%'>
                <Flex direction='row' justifyContent='space-between'>
                  <CustomEditablePreview />
                  <EditableInput wordBreak='break-all' />
                  <EditableControls />
                </Flex>
            </Editable>
          </Flex>
        </>
      } {/* End Private server Section */}
      <Flex direction='row' align='center'>
        <Text as='h2' style={{textTransform: 'capitalize'}}>Boot&nbsp;Script: </Text>
        <Editable defaultValue={profile.settings?.bootScript}
          onSubmit={(next) => dispatch(setSettingsValue({field: 'bootScript', value: next}))}
          width='100%'>
            <Flex direction='row' justifyContent='space-between'>
              <CustomEditablePreview />
              <EditableInput wordBreak='break-all' />
              <EditableControls />
            </Flex>
        </Editable>
      </Flex>
      <Flex direction='row' align='center'>
        <Text as='h2' style={{textTransform: 'capitalize'}}>Boot&nbsp;Script&nbsp;Args: </Text>
        <Editable defaultValue={profile.settings?.bootArgs}
          onSubmit={(next) => dispatch(setSettingsValue({field: 'bootArgs', value: next}))}
          width='100%'>
            <Flex direction='row' justifyContent='space-between'>
              <CustomEditablePreview />
              <EditableInput wordBreak='break-all' />
              <EditableControls />
            </Flex>
        </Editable>
      </Flex>
      <Divider marginTop='5px' marginBottom='5px'/>
      <Flex direction='row' align='center' justifyContent='space-between'>
        <Text as='h2' style={{textTransform: 'capitalize'}}>Automatically&nbsp;Close&nbsp;Launcher</Text>
        <Switch
          isChecked={profile.settings.autocloseLauncher}
          onChange={() => {dispatch(setSettingsValue({field: 'autocloseLauncher', value: !profile.settings.autocloseLauncher}))}} />
      </Flex>
      <Divider marginTop='5px' marginBottom='5px'/>
      <Flex direction='row' align='center' justifyContent='space-between'>
        <Select 
            placeholder="Language"
            onChange={(e) => {dispatch(setSettingsValue({field:'language', value:parseInt(e.target.value, 10)}))}}>
          <option value={1}>Japanese</option>
          <option value={2}>English</option>
        </Select>
      </Flex>
    </AccordionPanel>
  </AccordionItem>
}