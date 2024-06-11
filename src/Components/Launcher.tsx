import { Flex, Icon, Tab, TabList, TabPanel, TabPanels, Tabs, Tooltip } from "@chakra-ui/react"
import AddonListing from "./Widgets/AddonListing"
import AppLayout from "./Layouts/App"
import SettingsEditor from "./Widgets/SettingsEditor"
import GamepadEditor from "./Widgets/GamepadEditor"
import { useEffect } from "react"
import ProfileListing from "./Widgets/ProfileListing"
import { RiProfileLine } from 'react-icons/ri'
import { SiCplusplus, SiLua } from 'react-icons/si'
import { SettingsIcon } from "@chakra-ui/icons"
import {PiGameController} from 'react-icons/pi'

export default function Launcher() {
  useEffect(() => {
    
  }, [])
  return (
  <AppLayout>
    <Tabs width='90%' colorScheme="orange">
      <TabList>
		    <Tab>
          <Tooltip label='Profiles'>
            <span>
              <RiProfileLine />
            </span>
          </Tooltip>
        </Tab>
        <Tab>
          <Tooltip label='Plugins'>
            <span>
              <SiCplusplus />
            </span>
          </Tooltip>
        </Tab>
        <Tab>
          <Tooltip label='Addons'>
            <span>
              <SiLua/>
            </span>
          </Tooltip>
        </Tab>
        <Tab>
          <Tooltip label='Ashita Settings'>
            <span>
              <SettingsIcon />
            </span>
          </Tooltip>
        </Tab>
		    <Tab>
          <Tooltip label='Gamepad Settings'>
            <span>
              <PiGameController />
            </span>
          </Tooltip>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Flex overflowY='auto' flexDirection='column' height='80vh'>
            <ProfileListing />
          </Flex>
        </TabPanel>
        <TabPanel>
          <span>Plugins: Coming Soon!</span>
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
    </Tabs>
  </AppLayout>
  )
}
