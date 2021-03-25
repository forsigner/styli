import { Theme } from '@styli/types'
import { colors } from '@styli/colors'

export const theme: Partial<Theme> = {
  colors: colors,
  spacing: {
    0: '0',
    1: '4rpx',
    2: '8rpx',
    3: '12rpx',
    4: '16rpx',
    5: '20rpx',
    6: '24rpx',
    7: '28rpx',
    8: '32rpx',
    9: '36rpx',
    10: '40rpx',
    11: '44rpx',
    12: '48rpx',
    14: '56rpx',
    16: '64rpx',
    20: '80rpx',
    24: '96rpx',
    28: '112rpx',
    32: '128rpx',
    36: '144rpx',
    40: '160rpx',
    44: '176rpx',
    48: '192rpx',
    52: '208rpx',
    56: '224rpx',
    60: '240rpx',
    64: '256rpx',
    72: '288rpx',
    80: '320rpx',
    96: '384rpx',
  },
  headings: ['48rpx', '32rpx', '24rpx', , '20rpx', '16rpx', '14rpx'] as string[] | number[],
  fontSize: {
    xs: '12rpx',
    sm: '14rpx',
    base: '16rpx',
    lg: '18rpx',
    xl: '20rpx',
    '2xl': '24rpx',
    '3xl': '30rpx',
    '4xl': '36rpx',
    '5xl': '48rpx',
    '6xl': '60rpx',
    '7xl': '72rpx',
    '8xl': '96rpx',
    '9xl': '128rpx',
  },
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  borderColors: ['#dddddd', '#f0f0f0'],
  borderRadius: {
    none: '0',
    sm: '2rpx',
    base: '4rpx',
    md: '6rpx',
    lg: '8rpx',
    xl: '12rpx',
    '2xl': '16rpx',
    '3xl': '24rpx',
    full: '9999rpx',
  },
  shadow: {
    xs: '0 1rpx 1rpx rgba(0, 0, 0, 0.12), 0 0 1rpx rgba(0,0,0,0.01)',
    sm: '0 1rpx 3rpx rgba(0, 0, 0, 0.12), 0 0 1rpx rgba(0,0,0,0.01)',
    base: '0 2rpx 4rpx rgba(0, 0, 0, 0.12), 0 0 2rpx rgba(0,0,0,0.02)',
    md: '0 4rpx 8rpx rgba(0, 0, 0, 0.12), 0 0 2rpx rgba(0,0,0,0.02)',
    lg: '0 8rpx 16rpx rgba(0, 0, 0, 0.12), 0 0 2rpx rgba(0,0,0,0.02)',
    xl: '0 14rpx 24rpx rgba(0, 0, 0, 0.16), 0 0 2rpx rgba(0,0,0,0.02)',
    xxl: '0 24rpx 48rpx rgba(0, 0, 0, 0.2), 0 0 2rpx rgba(0,0,0,0.02)',
    inner: 'inset 0 2rpx 4rpx 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3rpx rgba(66, 153, 225, 0.5)',
    none: 'none',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
}
