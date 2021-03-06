import { Preset } from '@fower/core'
import { plugins } from './plugins'
import { theme } from './theme'

export const presetWeb: Preset = {
  unit: 'px',
  prefix: '',
  theme,
  plugins,
}

export default presetWeb
