import { Box, Flex, Text } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'

export type AppLayoutProps = {}

export default function AppLayout({children}:PropsWithChildren<AppLayoutProps>) {
  return (
    <Box width='100vw' height='100vh'>
      <Box width='100vw' height='30px' className='titlebar'>
        <Flex align='center'>
          <Text marginLeft='1em'paddingTop='2px'>Magian Launcher</Text>
        </Flex>
      </Box>
      <Flex align='center' justify='center'>
        {children}
      </Flex>
    </Box>
  )
}
