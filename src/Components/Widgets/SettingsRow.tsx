/* eslint-disable react/jsx-props-no-spreading */
import { AccordionPanel, ButtonGroup, Editable, EditableInput, EditablePreview, Flex, IconButton, useColorModeValue, useEditableControls } from "@chakra-ui/react"
import {CheckIcon, CloseIcon, EditIcon} from '@chakra-ui/icons'

export type SettingsRowProps = {
  k0: string
  k1: string
  k2: string
  value: any
  overrideSettings: (k0:string, k1: string,k2: string, value: any) => void
}

export default function SettingsRow({k0, k1, k2, value, overrideSettings}:SettingsRowProps) {
  // eslint-disable-next-line react/no-unstable-nested-components
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls()
    return isEditing ? (
      <ButtonGroup>
        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} aria-label={`set ${k2}`} />
        <IconButton icon={<CloseIcon boxSize={3} />} {...getCancelButtonProps()} aria-label='Cancel' />
      </ButtonGroup>
    ) : (
      <IconButton size='sm' icon={<EditIcon />} {...getEditButtonProps()} aria-label='Edit'/>
    )
  }
  return <AccordionPanel>
  <Flex direction='row' align='center'>
    <h2 style={{textTransform: 'capitalize'}}>{k2}:</h2>
    <Editable defaultValue={value as string}
      onSubmit={(nextvalue: string):void => {
        overrideSettings(k0, k1, k2, nextvalue)
      }}
      width='100%'>
      <Flex direction='row' justifyContent='space-between'>
        <EditablePreview background={useColorModeValue('gray.100', 'gray.700')} paddingLeft='8px' paddingRight='8px' marginLeft='0.5em' overflowWrap='anywhere'/>
        <EditableInput wordBreak='break-all'/>
        <EditableControls />
      </Flex>
    </Editable>
  </Flex>
</AccordionPanel>
}
