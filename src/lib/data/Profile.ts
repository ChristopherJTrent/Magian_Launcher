export default class Profile {
  public name:string

  public enabledAddons: string[]

  constructor(name: string, enabledAddons:string[] = []) {
    this.name = name
    this.enabledAddons = enabledAddons
  }
}