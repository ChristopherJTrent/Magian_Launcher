import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import AddonListing from "./Widgets/AddonListing"
import DummyAddons from "../lib/data/Dummy"
import AppLayout from "./Layouts/App"

export default function Launcher() {
  return (
  <AppLayout>
    <Tabs width='90%' colorScheme="orange">
      <TabList>
        <Tab>Addons</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <AddonListing addons={DummyAddons}/>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </AppLayout>
  )
}
