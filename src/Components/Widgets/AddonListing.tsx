import { Accordion, AccordionButton, AccordionItem } from "@chakra-ui/react"
import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../lib/store/store"
import { receiveAddons } from "../../lib/store/addonsReducer"

export default function AddonListing() {
  const addons = useAppSelector(state => state.addons)
  const dispatch = useAppDispatch()
  useEffect(() => {
    window.electron.ipcRenderer.getAddons().then((v) => {
      // console.log(v)
      return dispatch(receiveAddons(v))
    }).catch((_) => {})
  }, [dispatch])
  console.log(addons)
  return <ul>
    {addons && addons.map((v, i) => <li key={i}>{v}</li>)}
  </ul>
}
