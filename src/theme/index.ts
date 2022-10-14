import { DefaultTheme } from 'styled-components'

import { DEFAULT_COLORS } from './colors'
import { DEFAULT_FONT_SIZES } from './fontSizes'
import { DEFAULT_TYPEFACES } from './typefaces'
import { DEFAULT_LINE_HEIGHTS } from './lineHeights'
import { DEFAULT_THEME_DEFAULTS } from './defaults'
import { DEFAULT_VARIANTS } from './variants'
import { DEFAULT_RADII } from './radii'
import { DEFAULT_ELEVATIONS } from './elevations'
import { DEFAULT_LETTER_SPACINGS } from './letterSpacings'

export const THEME = {
  defaults: DEFAULT_THEME_DEFAULTS,
  typefaces: DEFAULT_TYPEFACES,
  colors: DEFAULT_COLORS,
  fontSizes: DEFAULT_FONT_SIZES,
  lineHeights: DEFAULT_LINE_HEIGHTS,
  variants: DEFAULT_VARIANTS,
  radii: DEFAULT_RADII,
  elevations: DEFAULT_ELEVATIONS,
  letterSpacings: DEFAULT_LETTER_SPACINGS,
} as const

export type TypefaceName = keyof typeof DEFAULT_TYPEFACES
export type ColorName = keyof typeof DEFAULT_COLORS
export type FontSizeName = keyof typeof DEFAULT_FONT_SIZES
export type LineHeightName = keyof typeof DEFAULT_LINE_HEIGHTS
export type VariantName = keyof typeof DEFAULT_VARIANTS
export type ElevationName = keyof typeof DEFAULT_RADII
export type LetterSpacingName = keyof typeof DEFAULT_LETTER_SPACINGS
