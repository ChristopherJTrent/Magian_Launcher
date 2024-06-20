import { AccordionItem, AccordionPanel, Editable, EditableInput, Flex, Text } from "@chakra-ui/react"
import AccordButton from "../AccordButton"
import { useAppDispatch, useAppSelector } from "../../../lib/store/store"
import { currentProfile, setSettingsValue } from "../../../lib/store/ProfileReducer"
import CustomEditablePreview from "../customEditablePreview"
import EditableControls from "../EditableControls"

export default function BootConfig() {
  const profile = useAppSelector(currentProfile)
  const dispatch = useAppDispatch()
  console.log(profile)
  return <AccordionItem>
    <AccordButton>
      Boot
    </AccordButton>
    <AccordionPanel>
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
    </AccordionPanel>
  </AccordionItem>
}