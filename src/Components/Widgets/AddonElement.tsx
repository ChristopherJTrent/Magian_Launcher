import { useSelector } from "react-redux"
import { Flex, Link, Switch, Text } from "@chakra-ui/react"
import { addonEnabled, setAddonDisabled, setAddonEnabled } from "../../lib/store/ProfileReducer"
import { useAppDispatch } from "../../lib/store/store"
import { changeScript } from "../../lib/store/flagsReducer"
import Addon from "../../lib/data/Addon"

export type AddonElementProps = {
  addon: Addon
}

export default function AddonElement({addon}:AddonElementProps) {
  // const [addonEnabled, setAddonEnabled] = useState(false)
  // return <AccordionItem >
  //  <h2>
  //    <AccordionButton _hover={{transform: '', opacity: 1}}>
  //      <Box as="span" flex='1' textAlign='left'>
  //        {addon.Name}
  //      </Box>
  //      <Switch isChecked={addonEnabled} onChange={() => setAddonEnabled(! addonEnabled)} colorScheme="orange"/>
  //      <AccordionIcon />
  //    </AccordionButton>
  //  </h2>
  //  <AccordionPanel>
  //    <Text fontSize='sm' color='GrayText'>{addon.Author} ({addon.AuthorContact})</Text>
  //    <Text fontSize='lg' overflowWrap='break-word'>{addon.Description}</Text>
  //  </AccordionPanel>
  // </AccordionItem>
  const enabled = useSelector(addonEnabled(addon.name))
  const dispatch = useAppDispatch()

  const toggleAddon = () => {
    dispatch(changeScript())
    if (enabled) {
      dispatch(setAddonDisabled(addon.name))
    } else {
      dispatch(setAddonEnabled(addon.name))
    }
  }
  return <li>
    <Flex justifyContent='space-between' direction='row'>
      <Flex direction='column'>
        <h2>{addon.name}</h2>
        <Text>
          {addon.desc}
        </Text>
      </Flex>
      <Switch
        isChecked={enabled}
        onChange={toggleAddon}
        sx={{
          '.chakra-switch__track[data-checked]': {
            backgroundColor: '#D35547'
          }
        }}
      />
    </Flex>
    <Flex direction='row' justifyContent='space-between'>
      {addon.author}
      <Link href={addon.link}>{addon.link}</Link>
    </Flex>
  </li>
}
