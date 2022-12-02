import { readFileSync } from 'fs'
import { resolve } from 'path'

function getData(dir) {
  return readFileSync(resolve(dir, './input.txt'), {
    encoding: 'utf-8',
  })
}

export default {
    getData
}