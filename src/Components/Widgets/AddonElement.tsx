import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Switch, Text } from "@chakra-ui/react"
import Addon from "../../lib/data/Addon"
import { useState } from "react"

export type AddonElementProps = {
  addon: Addon
}

export default function AddonElement({addon}:AddonElementProps) {
  const [addonEnabled, setAddonEnabled] = useState(false)
  return <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          {addon.Name}
        </Box>
        <Switch isChecked={addonEnabled} onChange={() => setAddonEnabled(! addonEnabled)} />
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel>
      <Text fontSize='sm' color='GrayText'>{addon.Author} ({addon.AuthorContact})</Text>
      <Text fontSize='lg' overflowWrap='break-word'>{addon.Description}</Text>
    </AccordionPanel>
  </AccordionItem>
}
