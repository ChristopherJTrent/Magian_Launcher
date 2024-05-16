import { useState } from "react"
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, Box } from "@chakra-ui/react"
import retail from "../../lib/util/Config/DefaultConfiguration"
import SettingsRow from "./SettingsRow"



export default function SettingsEditor() {
  const [settings, setSettings] = useState(retail('magian'))
  function overrideSettings(k0:string, k1: string, k2:string, value:any): void {
    const v = settings
    const v1 = v[k0 as keyof typeof settings]
    // THIS WORKS. DO NOT FIX THE ERROR.
    // THESE KEYS ARE GENERATED VALUES,
    // TYPESCRIPT IS JUST TOO DUMB TO SEE IT
    const v2:any = v1[k1]
    const replacementValue = {...v, [k0]: {...v1, [k1]: {...v2, [k2]: value}}}
    setSettings((replacementValue))
  }
  return (
      <Box scrollBehavior='smooth' overflowY='scroll' height='80vh'>
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
                      value={v2}
                      // There's no way to make this work without binding. I don't care.
                      // eslint-disable-next-line react/jsx-no-bind
                      overrideSettings={overrideSettings} />
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
