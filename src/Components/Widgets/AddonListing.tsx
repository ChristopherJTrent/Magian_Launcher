import React, { useEffect } from "react"
import {  Flex } from "@chakra-ui/react"
import { useAppDispatch, useAppSelector } from "../../lib/store/store"
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
        height='calc(90vh - 30px)'>
      <ul>
        {addons && addons.map((v) => <AddonElement key={v} addon={v}/>)}
      </ul>
    </Flex>
    <AddonSaveButton />
  </>
}
