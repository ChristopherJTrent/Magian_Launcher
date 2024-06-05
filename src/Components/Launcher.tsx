import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import AddonListing from "./Widgets/AddonListing"
import AppLayout from "./Layouts/App"
import SettingsEditor from "./Widgets/SettingsEditor"
import GamepadEditor from "./Widgets/GamepadEditor"
import { useEffect } from "react"

export default function Launcher() {
  useEffect(() => {
    
  }, [])
  return (
  <AppLayout>
    <Tabs width='90%' colorScheme="orange">
      <TabList>
		    <Tab>Profiles</Tab>
        <Tab>Addons</Tab>
        <Tab>Settings</Tab>
		    <Tab>Controller Settings</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Flex overflowY='scroll' flexDirection='column' height='40vh'>
            {}
          </Flex>
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
