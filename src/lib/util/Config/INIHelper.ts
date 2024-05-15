import {stringify, parse} from 'ini'

export function dumpINI(object:Object):string {
  return stringify(object, {
    align: true,
    sort: false,
    platform: 'win32',
  })
}

export function parseINI(string:string):Object {
  return parse(string)
}
