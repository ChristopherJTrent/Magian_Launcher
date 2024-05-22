import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import AddonListing from "./Widgets/AddonListing"
import DummyAddons from "../lib/data/Dummy"
import AppLayout from "./Layouts/App"
import SettingsEditor from "./Widgets/SettingsEditor"
import GamepadEditor from "./Widgets/GamepadEditor"
import retail from "../lib/util/Config/DefaultConfiguration"
import { configurationSelector } from "../lib/store/registrySelector"
import { useAppSelector } from "../lib/store/store"

export default function Launcher() {
  const retailObj = retail('example')
  const obj = useAppSelector(configurationSelector(retailObj))
  const addons = useAppSelector((state) => state.addons)
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
          </Flex>
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
