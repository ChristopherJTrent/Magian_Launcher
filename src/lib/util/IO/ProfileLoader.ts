import { readFile, readdir } from "fs/promises"
import { PROFILE_LOCATION } from "../Installation/paths"
import Profile from "../../data/Profile"

export default async function loadProfiles():Promise<Profile[]> {
  const profiles:Profile[] = []
  const profileLocations = (await readdir(PROFILE_LOCATION, {withFileTypes: true}))
    .filter(entry => entry.isDirectory())
    .map(entry => `${entry.path}\\profile.json`)
  profileLocations.forEach(
    (v) => readFile(v).then(
      contents => profiles.push(JSON.parse(contents.toString()) as Profile)
    )
  )
  return profiles
}