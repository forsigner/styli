import { Property } from 'csstype'
import { Theme } from '../Theme'

type DisplayFn = (theme: Theme) => Property.Display | Property.Display[]

export interface Displays {
  display?: Property.Display | Property.Display[] | DisplayFn

  inline?: boolean

  inlineBlock?: boolean
  block?: boolean

  // conflict with flex-1
  // flex?: boolean
  inlineFlex?: boolean

  grid?: boolean
  inlineGrid?: boolean

  hide?: boolean

  table?: boolean
}
