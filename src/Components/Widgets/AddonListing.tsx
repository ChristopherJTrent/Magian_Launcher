import React, { useEffect } from "react"
import { Button, Flex } from "@chakra-ui/react"
import { CheckIcon } from "@chakra-ui/icons"
import { store, useAppDispatch, useAppSelector } from "../../lib/store/store"
import { receiveAddons } from "../../lib/store/addonsReducer"
import AddonElement from "./AddonElement"
import AddonSaveButton from "./AddonSaveButton"

export default function AddonListing() {
  const addons = useAppSelector(state => state.addons)
  const dispatch = useAppDispatch()
  useEffect(() => {
    window.electron.ipcRenderer.getAddons().then((v) => {
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
        {addons && addons.map((v) => <AddonElement key={v} addon={v}/>)}
      </ul>
    </Flex>
    <AddonSaveButton />
  </>
}
