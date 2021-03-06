import { FowerPlugin } from '@fower/core'
import { camel } from '@fower/utils'

function isMatch(key: string) {
  return /^justify(Content|Items|Self)$|^align(Items|Content|Self)$/i.test(key)
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      const key = atom.key.replace(/^justify/, 'justify-').replace(/^align/, 'align-')
      atom.style = {
        [camel(key)]: atom.value,
      }
      return atom
    },
  }
}
