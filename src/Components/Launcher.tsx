import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import AddonListing from "./Widgets/AddonListing"
import DummyAddons from "../lib/data/Dummy"
import AppLayout from "./Layouts/App"
import SettingsEditor from "./Widgets/SettingsEditor"
import GamepadEditor from "./Widgets/GamepadEditor"

export default function Launcher() {
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
          Coming Soon!
        </TabPanel>
        <TabPanel>
          <AddonListing addons={DummyAddons}/>
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
