import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Tooltip } from "@chakra-ui/react"
import { RiProfileLine } from 'react-icons/ri'
import { SiCplusplus, SiLua } from 'react-icons/si'
import { FaGear } from 'react-icons/fa6'
import {PiGameController} from 'react-icons/pi'
import AddonListing from "./Widgets/AddonListing"
import AppLayout from "./Layouts/App"
import SettingsEditor from "./Widgets/SettingsEditor"
import GamepadEditor from "./Widgets/GamepadEditor"
import ProfileListing from "./Widgets/ProfileListing"
import PluginListing from "./Widgets/PluginListing"
import { useAppSelector } from "../lib/store/store"

export default function Launcher() {
  const loadComplete = useAppSelector(state => state.flags.loadSucceeded)
  return (
  <AppLayout>
    {!loadComplete && 
    <Tabs width='100%' height='calc(100vh - 30px)' orientation="vertical"
    sx={{
      '.chakra-tabs__tablist': {
        border: 'none',
      },
      '.chakra-tabs__tab[aria-selected=true]': {
        backgroundColor: '#D35547',
        color: 'white'
      },
      'chakra-tabs__tab[aria-selected=false]': {
        backgroundColor: '#313541'
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
		    <Tab width='60px'>
        <Flex direction='column'>
              <PiGameController size='large'/>
              <p style={{
                fontSize: '6pt',
                fontWeight: '600'
              }}>Gamepad</p>
          </Flex>
        </Tab>
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
    </Tabs> || <Flex>

    </Flex>
    }
  </AppLayout>
  )
}
