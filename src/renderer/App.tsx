import './App.css'
import { ChakraProvider} from '@chakra-ui/react'
import { Provider } from 'react-redux'
import theme from '../lib/theme'
import Launcher from '../Components/Launcher'
import { store } from '../lib/store/store'

export default function App() {
  return (
	<Provider store={store}>
		<ChakraProvider theme={theme}>
			<Launcher />
	    </ChakraProvider>
	</Provider>
  )
}
