import { MemoryRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { dumpINI } from '../lib/util/Config/INIHelper'
import retail from '../lib/util/Config/DefaultConfiguration'
import theme from '../lib/theme'
import AddonListing from '../Components/Widgets/AddonListing'
import DummyAddons from '../lib/data/Dummy'

function Hello() {
  return (
    <AddonListing addons={DummyAddons} />
  )
}

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Hello />} />
        </Routes>
      </Router>
    </ChakraProvider>
  )
}
