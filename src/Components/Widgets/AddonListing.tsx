import React, { useEffect } from "react"
import { Button, Flex } from "@chakra-ui/react"
import { CheckIcon } from "@chakra-ui/icons"
import { useAppDispatch, useAppSelector } from "../../lib/store/store"
import { receiveAddons } from "../../lib/store/addonsReducer"
import AddonElement from "./AddonElement"

export default function AddonListing() {
  const addons = useAppSelector(state => state.addons)
  const dispatch = useAppDispatch()
  useEffect(() => {
    window.electron.ipcRenderer.getAddons().then((v) => {
      // console.log(v)
      return dispatch(receiveAddons(v))
    }).catch((_) => {})
  }, [dispatch])
  return <>
    <Flex 
        direction='column' 
        overflowY='scroll' 
        paddingRight='5px'
        height='80vh'>
      <ul>
        {addons && addons.map((v) => <AddonElement addon={v}/>)}
      </ul>
    </Flex>
    <Button marginTop='3px' 
        width='100%' onClick={() => {}}>
      <Flex>
        <h1>Save</h1>
        <CheckIcon marginLeft='10px'/>
      </Flex>
    </Button>
  </>
}
