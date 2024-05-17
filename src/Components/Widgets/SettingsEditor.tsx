import { Accordion, AccordionButton, AccordionIcon, AccordionItem, Box } from "@chakra-ui/react"
import SettingsRow from "./SettingsRow"
import GamepadEditor from "./GamepadEditor"
import { RootState, useAppSelector } from "../../lib/store/store"
import { AshitaSettings } from "../../lib/store/AshitaSettingsReducer"



export default function SettingsEditor() {
	const settings = useAppSelector((state:RootState):AshitaSettings => state.ashitaSettings)
	 
  return (
      <Box scrollBehavior='smooth' overflowY='scroll' height='80vh'>
          <GamepadEditor />
          {
            Object.entries(settings).map(([k, v]) => (
              <>
                <h2 style={{textTransform: 'capitalize'}}>{k}</h2>
                <Accordion allowToggle allowMultiple>
                  {Object.entries(v).map(([k1,v1]) => (
                    <AccordionItem>
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
                      value={v2} />
                    ))}
                  </AccordionItem>
                ))}
                </Accordion>
              </>
            ))
          }
      </Box>
  )
}
