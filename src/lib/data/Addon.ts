export default class Addon {
  public Name:string

  public Author:string

  public AuthorContact:string

  public RepoURL: string

  public Description?:string

  public DownloadURL:string

  /**
   * The relative path from the root of the downloaded zip file to the
   * start of the filesystem that should be copied.
   * if missing, will extract the zip directly into the InstallLocation
   */
  public AddonRoot?:string

  /**
   * The path relative to the ashita installation root where the addon should be installed
   * If missing, will default to addons/{Name} for `AddonType` "Addon", and plugins/ for `AddonType` "Plugin"
   */
  public InstallLocation?:string

  public AddonType?:("Addon"|"Plugin")

  constructor(name:string,
      author:string,
      authorContact:string,
      repoUrl:string,
      description:string,
      downloadUrl:string,
      addonRoot:string = '\\',
      installLocation:string = '',
      addonType:('Addon'|'Plugin') = 'Addon') {
    this.Name = name
    this.Author = author
    this.AuthorContact = authorContact
    this.RepoURL = repoUrl
    this.Description = description
    this.DownloadURL = downloadUrl
    this.AddonRoot = addonRoot
    this.InstallLocation = installLocation
    this.AddonType = addonType
  }
}
