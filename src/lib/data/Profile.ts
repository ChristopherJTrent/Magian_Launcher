import { receiveSettings } from "../store/AshitaSettingsReducer"
import { store } from "../store/store"
import retail from "../util/Config/DefaultConfiguration"

export default class Profile {
  public name:string

  constructor(name: string) {
    this.name = name
  }

  public load() {
    store.dispatch(receiveSettings(retail(this.name)))
  }
}