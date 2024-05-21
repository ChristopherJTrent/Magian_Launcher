import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import AddonListing from "./Widgets/AddonListing"
import DummyAddons from "../lib/data/Dummy"
import AppLayout from "./Layouts/App"
import SettingsEditor from "./Widgets/SettingsEditor"
import GamepadEditor from "./Widgets/GamepadEditor"
import { dumpINI } from "../lib/util/Config/INIHelper"
import retail from "../lib/util/Config/DefaultConfiguration"
import getGamepadRegistrySegment from "../lib/store/registrySelector"
import { useAppSelector } from "../lib/store/store"

export default function Launcher() {
  const retailObj = retail('example')
  const obj = useAppSelector((state) => ({...retailObj,
    ffxi:{
      ...retailObj.ffxi,
      registry: {
        ...retailObj.ffxi.registry,
        ...getGamepadRegistrySegment(state.gamepad)
      }
    }
  }))
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
          {dumpINI(obj)}
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
