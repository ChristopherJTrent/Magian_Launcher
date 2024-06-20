import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Switch, Text } from "@chakra-ui/react"
import { useState } from "react"
import SettingsRow from "./SettingsRow"
import { RootState, useAppSelector } from "../../lib/store/store"
import { AshitaSettings_old } from "../../lib/store/AshitaSettingsReducer"
import AshitaSettings from "../../lib/data/AshitaSettings"
import { currentProfile } from "../../lib/store/ProfileReducer"
import AccordButton from "./AccordButton"
import BootConfig from "./configModules/BootConfig"

// TODO: Refactor this module to use the profile settings\

export default function SettingsEditor() {
  const advancedRows = ['taskpool','logging', 'resources', 'direct3d8', 'registry']
	const profile = useAppSelector(currentProfile)
	const [advanced, setAdvanced] = useState(false)
  return (
      <Box scrollBehavior='smooth' overflowY='scroll' height='80vh'>
        <Accordion allowMultiple>
          <BootConfig />
        </Accordion>
          {/* Enable Advanced Settings:&nbsp;
          <Switch
            isChecked={advanced}
            onChange={() => setAdvanced(! advanced)} 
            sx={{
              '.chakra-switch__track[data-checked]': {
                backgroundColor: '#D35547'
              }
            }}/>
          {
            Object.entries(settings).map(([k, v]) => (
              <div key={k}>
                {(advanced || k === 'ashita') && <h2 style={{textTransform: 'capitalize'}}>{k}</h2>}
                <Accordion allowMultiple>
                  {Object.entries(v).map(([k1,v1]) => 
                    { if (advanced || !advancedRows.includes(k1)) {
                      return <AccordionItem key={k1}>
                      <h2>
                        <AccordionButton>
                          <Box as='span' flex='1' textAlign='left' textTransform="capitalize" fontSize='larger' fontWeight='600'>
                            {k1}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                    {Object.entries(v1).map(([k2, v2]) => (
                      <SettingsRow
                      k0={k}
                      k1={k1}
                      k2={k2}
                      value={v2} key={k2}/>
                    ))}
                  </AccordionItem>}
                    // eslint-disable-next-line react/jsx-no-useless-fragment
                    return undefined
                  }
                )}
                </Accordion>
              </div>
            ))
          } */}
      </Box>
  )
}
