import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { RiProfileLine } from 'react-icons/ri'
import { SiCplusplus, SiLua } from 'react-icons/si'
import { FaGear } from 'react-icons/fa6'
import {PiGameController} from 'react-icons/pi'
import { useEffect } from "react"
import AddonListing from "./Widgets/AddonListing"
import AppLayout from "./Layouts/App"
import SettingsEditor from "./Widgets/SettingsEditor"
import GamepadEditor from "./Widgets/GamepadEditor"
import ProfileListing from "./Widgets/ProfileListing"
import PluginListing from "./Widgets/PluginListing"
import { useAppDispatch, useAppSelector } from "../lib/store/store"
import handleApplicationLoad from "../lib/util/Installation/Loader"
import { setRemainingHooks } from "../lib/store/flagsReducer"
import { shiftHook } from "../lib/store/loaderReducer"

export default function Launcher() {
  const remainingHooks = useAppSelector(state => state.flags.remainingHooks)
  const loader = useAppSelector(state => state.loader)
  const dispatch = useAppDispatch()

  useEffect(() => {
    handleApplicationLoad(dispatch)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (loader.hooks.length > 0 && remainingHooks === 0) {
      const current = loader.hooks[0]
      dispatch(shiftHook())
      dispatch(setRemainingHooks(1))
      current.func().then(
        () => dispatch(setRemainingHooks(0))
      ).catch((_) => {})
    }
  }, [loader, remainingHooks, dispatch])
  return (
  <AppLayout>
    {loader.hooks.length === 0 &&
    <Tabs width='100%' height='calc(100vh - 30px)' orientation="vertical"
    sx={{
      '.chakra-tabs__tablist': {
        borderLeft: 'none',
      },
      '.chakra-tabs__tab[aria-selected=true]': {
        backgroundColor: '#D35547',
        color: 'white'
      },
      'chakra-tabs__tab[aria-selected=false]': {
        backgroundColor: '#313541'
      },
      '.chakra-tabs__tab:hover': {
        backgroundColor: '#D35547',
        color: 'white'
      }
    }}>
      <TabList>
		    <Tab width='60px'>
          <Flex direction='column' color='inherit'>
              <RiProfileLine size='large' color='inherit'/>
              <p style={{
                fontSize: '6pt',
                fontWeight: '600'
              }}>Profiles</p>
          </Flex>
        </Tab>
        <Tab width='60px'>
        <Flex direction='column'>
              <SiCplusplus size='large'/>
              <p style={{
                fontSize: '6pt',
                fontWeight: '600'
              }}>Plugins</p>
          </Flex>
        </Tab>
        <Tab width='60px'>
        <Flex direction='column'>
              <SiLua size='large'/>
              <p style={{
                fontSize: '6pt',
                fontWeight: '600'
              }}>Addons</p>
          </Flex>
        </Tab>
        <Tab width='60px'>
        <Flex direction='column'>
              <FaGear size='large'/>
              <p style={{
                fontSize: '6pt',
                fontWeight: '600'
              }}>Settings</p>
          </Flex>
        </Tab>
		    {/* <Tab width='60px'>
        <Flex direction='column'>
              <PiGameController size='large'/>
              <p style={{
                fontSize: '6pt',
                fontWeight: '600'
              }}>Gamepad</p>
          </Flex>
        </Tab> */}
      </TabList>
      <TabPanels>
        <TabPanel>
          <Flex overflowY='auto' flexDirection='column' height='80vh'>
            <ProfileListing />
          </Flex>
        </TabPanel>
        <TabPanel>
          <PluginListing />
        </TabPanel>
        <TabPanel>
          <AddonListing/>
        </TabPanel>
        <TabPanel>
          <SettingsEditor />
        </TabPanel>
        <TabPanel>
          <GamepadEditor />
        </TabPanel>
      </TabPanels>
    </Tabs> || <Flex justify='center' align='center' width='100%' height='calc(100vh - 30px)'>
      <h1>Running Hook: {loader.currentHook}</h1>
    </Flex>
    }
  </AppLayout>
  )
}
