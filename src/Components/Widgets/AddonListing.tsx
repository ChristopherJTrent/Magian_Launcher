import { Accordion } from "@chakra-ui/react"
import React from "react"
import Addon from "../../lib/data/Addon"
import AddonElement from "./AddonElement"

export type AddonListingProps = {
  addons: Addon[]
}

export default function AddonListing({addons}: AddonListingProps) {
  return <Accordion allowToggle width='60%' reduceMotion>
    {addons.map((v) => <AddonElement addon={v} key={v.Name as React.Key} />)}
  </Accordion>
}
