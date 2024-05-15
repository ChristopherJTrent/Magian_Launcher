import './App.css'
import { ChakraProvider} from '@chakra-ui/react'
import theme from '../lib/theme'
import Launcher from '../Components/Launcher'

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Launcher />
    </ChakraProvider>
  )
}
