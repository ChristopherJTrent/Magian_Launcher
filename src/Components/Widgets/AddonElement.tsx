import { useSelector } from "react-redux"
import { Flex, Switch } from "@chakra-ui/react"
import { addonEnabled, setAddonDisabled, setAddonEnabled } from "../../lib/store/ProfileReducer"
import { useAppDispatch } from "../../lib/store/store"
import { changeScript } from "../../lib/store/flagsReducer"

export type AddonElementProps = {
  addon: string
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
  const enabled = useSelector(addonEnabled(addon))
  const dispatch = useAppDispatch()

  const toggleAddon = () => {
    dispatch(changeScript())
    if (enabled) {
      dispatch(setAddonDisabled(addon))
    } else {
      dispatch(setAddonEnabled(addon))
    }
  }
  return <li>
    <Flex justifyContent='space-between' direction='row'>
      <h2>{addon}</h2>
      <Switch
        isChecked={enabled}
        onChange={toggleAddon}
      />
    </Flex>
  </li>
}
