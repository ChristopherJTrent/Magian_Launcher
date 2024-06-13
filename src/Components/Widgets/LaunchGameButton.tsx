import { IconButton } from "@chakra-ui/react"
import { CiPlay1 } from 'react-icons/ci'

type LaunchGameButtonProps = {
  profileName: string
}

export default function LaunchGameButton({profileName}:LaunchGameButtonProps) {

  const launchGame = () => {
    window.electron.ipcRenderer.launchAshita(profileName)
  }
  return <IconButton 
    aria-label={`Launch ${profileName}`}
    icon={<CiPlay1 />}
    onClick={launchGame}
    backgroundColor="#D35547"/>
}