export default class Profile {
  public name:string

  public enabledAddons: string[]

  public enabledPlugins: string[]

  constructor(name: string, enabledAddons:string[] = [], enabledPlugins:string[] = []) {
    this.name = name
    this.enabledAddons = enabledAddons
    this.enabledPlugins = enabledPlugins
  }
}