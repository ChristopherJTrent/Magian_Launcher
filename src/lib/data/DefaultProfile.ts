import Profile from "./Profile"

export type profilesMapping = {
  currentProfile:string
  list: {[name:string]: Profile}
}

export const initialProfiles:profilesMapping = {
  currentProfile: 'default',
  list: {
    'default': {
      name: 'default', 
      enabledAddons: [
        'distance',
        'fps',
        'move',
        'timestamp',
        'tparty'
      ],
      enabledPlugins: [
        'thirdparty',
        'addons',
        'screenshot'
      ]
    }
  }
}
