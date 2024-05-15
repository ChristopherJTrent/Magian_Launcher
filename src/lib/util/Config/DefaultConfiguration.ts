/* eslint-disable no-useless-computed-key */
const retail = (name:string) => ({
  ashita: {
    launcher: {
      autoclose: 1,
      name
    },
    boot: {
      file: '',
      command: '/game eAZcFcB',
      gamemodule: 'ffximain.dll',
      script: `${name}.txt`,
      args: ''
    },
    language: {
      playonline: 2,
      ashita: 2
    },
    logging: {
      level: 3,
      crashdumps: 1
    },
    taskpool: {
      threadcount: -1
    },
    resources: {
      ['offsets.use_overrides']: 1,
      ['pointers.use_overrides']: 1,
      ['resources.use_overrides']: 1
    },
    window: {
      startpos: {
        x: -1,
        y: -1,
      }
    },
    input: {
      ['gamepad.allowbackground']: 1,
      ['gamepad.disableenumeration']: 0,
      ['keyboard.blockinput']: 0,
      ['keyboard.blockbindsduringinput']:1,
      ['keyboard.silentbinds']: 1,
      ['keyboard.windowskeyenabled']: 1,
      ['mouse.blockinput']: 0,
      ['mouse.unhook']: 1
    },
    misc: {
      ['addons.silent']: 1,
      ['aliases.silent']: 1,
      ['plugins.silent']: 1
    }
  },
  ffxi: {
    direct3d8:{
      ['presentparams.backbufferformat']: -1,
      ['presentparams.backbuffercount']: -1,
      ['presentparams.multisampletype']: -1,
      ['presentparams.swapeffect']: -1,
      ['presentparams.enableautodepthstencil']: -1,
      ['presentparams.autodepthstencilformat']: -1,
      ['presentparams.flags']: -1,
      ['presentparams.fullscreen_refreshrateinhz']: -1,
      ['presentparams.fullscreen_presentationinterval']: -1,
      ['behaviorflags.fpu_preserve']: 0,
    },
    registry:{
      padsin000: '-1,-1,13,-1,10,0,14,3,2,-1,-1,-1,-1,-33,-33,32,32,-36,-36,35,35,6,7,5,4,-1,-1'
    }
  }
})

export default retail
