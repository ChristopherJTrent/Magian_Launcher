import { createRoot } from 'react-dom/client'
import { ColorModeScript } from '@chakra-ui/react'
import App from './App'
import theme from '../lib/theme'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)
root.render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
    <App />
  </>
)