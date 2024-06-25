import { IconButton } from "@chakra-ui/react"
import { EditIcon } from "@chakra-ui/icons"
import { useAppDispatch } from "../../../../lib/store/store"
import { setActiveProfile } from "../../../../lib/store/ProfileReducer"

type SetActiveProfileButtonProps = {
  profileName: string
}

export default function SetActiveProfileButton({profileName}:SetActiveProfileButtonProps) {
  const dispatch = useAppDispatch()

  return <IconButton
    aria-label={`Change Active Profile to ${profileName}`}
    icon={<EditIcon />}
    onClick={() => {
      dispatch(setActiveProfile(profileName))
    }}
    marginRight='5px'/>
}
