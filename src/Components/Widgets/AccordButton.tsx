import { AccordionButton, AccordionIcon, Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";


export default function AccordButton({children}:PropsWithChildren) {
  return <AccordionButton>
    <Box 
      as='span' 
      flex='1' 
      textAlign='left' 
      textTransform='capitalize'
      fontSize='larger'
      fontWeight='600'
    >
      {children}
    </Box>
    <AccordionIcon />
  </AccordionButton>
}