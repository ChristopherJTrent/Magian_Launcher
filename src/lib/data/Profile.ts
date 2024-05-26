import { AshitaSettings, receiveSettings } from "../store/AshitaSettingsReducer"
import { store } from "../store/store"
import retail from "../util/Config/DefaultConfiguration"

export default class Profile {
  public name:string

  public settings:AshitaSettings

  constructor(name: string) {
    this.name = name
    this.settings = retail(name)
  }

  public register() {
    store.dispatch(receiveSettings(this.settings))
  }
}