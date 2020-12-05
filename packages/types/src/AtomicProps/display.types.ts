import { Property } from 'csstype'
import { Theme } from '../Theme'

type DisplayFn = (theme: Theme) => Property.Display | Property.Display[]

export interface Displays {
  /**
   * Set display
   *
   * @example
   * ```tsx
   * <View display="block"></View>
   * <View display="flex"></View>
   * <View display="inline-block"></View>
   * ```
   */
  display?: Property.Display | Property.Display[] | DisplayFn

  /**
   * Set display to inline
   *
   * @example
   * ```tsx
   * <View inline></View>
   * ```
   */
  inline?: boolean

  /**
   * Set display to inline-block
   *
   * @example
   * ```tsx
   * <View inlineBlock></View>
   * ```
   */
  inlineBlock?: boolean

  /**
   * Set display to block
   *
   * @example
   * ```tsx
   * <View block></View>
   * ```
   */
  block?: boolean

  /**
   * Set display to grid
   *
   * @example
   * ```tsx
   * <View grid></View>
   * ```
   */
  grid?: boolean

  /**
   * Set display to none
   *
   * @example
   * ```tsx
   * <View hide></View>
   * ```
   */
  hide?: boolean

  /**
   * Set display to table
   *
   * @example
   * ```tsx
   * <View table></View>
   * ```
   */
  table?: boolean
}
