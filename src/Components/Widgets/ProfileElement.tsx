import { Flex, Text } from "@chakra-ui/react"
import LaunchGameButton from "./LaunchGameButton"

type ProfileElementProps = {
  profileName:string
}

export default function ProfileElement({profileName}:ProfileElementProps) {
  return <Flex 
      direction='row' 
      justifyContent='space-between' 
      alignItems='center'
      border='2px solid rgba(0,0,0,0.2)'>
    <Flex>
      <Text fontSize='large' style={{
        textTransform:'capitalize'
      }}>{profileName}</Text>
    </Flex>
    <LaunchGameButton profileName={profileName} />
  </Flex>
}