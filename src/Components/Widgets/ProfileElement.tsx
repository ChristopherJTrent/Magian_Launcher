import { Divider, Flex, Text } from "@chakra-ui/react"
import LaunchGameButton from "./LaunchGameButton"
import { useAppSelector } from "../../lib/store/store"
import TextHighlight from "./TextHighlight"

type ProfileElementProps = {
  profileName:string
}

function convertRegToWindowType(num:number) {
  switch(num){
    case -1: return 'Using Registry Value for Window Type'
    case 0: return 'Full Screen'
    case 1: return 'Windowed'
    case 2: return 'Borderless Windowed'
    default: return 'Windowed Fullscreen'
  }
}

export default function ProfileElement({profileName}:ProfileElementProps) {
  const profile = useAppSelector(state => state.profiles.list[profileName])
  return <Flex 
      direction='row' 
      justifyContent='space-between' 
      alignItems='center'
      border='2px solid rgba(0,0,0,0.3)'
      padding='5px'
      backgroundColor='rgba(255, 255, 255, 0.02)'>
    <Flex direction='column'>
      <Text fontSize='large' fontWeight='600' style={{
        textTransform:'capitalize'
      }}>{profile.name}</Text>
      <Flex direction='row' height='calc(3 * 16px)'>
        <TextHighlight />
        <Flex direction='column'>
          <Text color='GrayText' fontSize='8pt'>Language: {profile.settings.language === 1 ? 'JP' : 'EN'}</Text>
          <Text color='GrayText' fontSize='8pt'>Server Type: {profile.serverType}</Text>
          <Text color='GrayText' fontSize='8pt'>
            {`${profile.settings.windowResolutionX}x${profile.settings.windowResolutionY} (${convertRegToWindowType(profile.settings.windowMode)})`}
          </Text>
        </Flex>
      </Flex>
    </Flex>
    <LaunchGameButton profileName={profile.name} />
  </Flex>
}