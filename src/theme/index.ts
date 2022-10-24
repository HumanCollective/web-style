import { DEFAULT_BREAKPOINTS } from './breakpoints'
import { DEFAULT_COLORS } from './colors'
import { DEFAULT_FONT_SIZES } from './fontSizes'
import { DEFAULT_TYPEFACES } from './typefaces'
import { DEFAULT_LINE_HEIGHTS } from './lineHeights'
import { DEFAULT_THEME_DEFAULTS } from './defaults'
import { DEFAULT_VARIANTS } from './variants'
import { DEFAULT_RADII } from './radii'
import { DEFAULT_ELEVATIONS } from './elevations'
import { DEFAULT_LETTER_SPACINGS } from './letterSpacings'
import { DEFAULT_GRID_UNITS } from './gridUnits'

export const makeTheme = <
  ProjectDefaults,
  ProjectBreakpoints,
  ProjectGridUnits,
  ProjectTypefaces,
  ProjectColors,
  ProjectFontSizes,
  ProjectLineHeights,
  ProjectVariants,
  ProjectRadii,
  ProjectElevations,
  ProjectLetterSpacings
>({
  defaults,
  breakpoints,
  gridUnits,
  typefaces,
  colors,
  fontSizes,
  lineHeights,
  variants,
  radii,
  elevations,
  letterSpacings,
}: {
  defaults?: ProjectDefaults
  breakpoints?: ProjectBreakpoints
  gridUnits?: ProjectGridUnits
  typefaces?: ProjectTypefaces
  colors?: ProjectColors
  fontSizes?: ProjectFontSizes
  lineHeights?: ProjectLineHeights
  variants?: ProjectVariants
  radii?: ProjectRadii
  elevations?: ProjectElevations
  letterSpacings?: ProjectLetterSpacings
}) =>
  Object.freeze({
    defaults: { ...DEFAULT_THEME_DEFAULTS, ...defaults },
    breakpoints: breakpoints ?? DEFAULT_BREAKPOINTS,
    gridUnits: gridUnits ?? DEFAULT_GRID_UNITS,
    typefaces: { ...DEFAULT_TYPEFACES, ...typefaces },
    colors: { ...DEFAULT_COLORS, ...colors },
    fontSizes: { ...DEFAULT_FONT_SIZES, ...fontSizes },
    lineHeights: { ...DEFAULT_LINE_HEIGHTS, ...lineHeights },
    variants: { ...DEFAULT_VARIANTS, ...variants },
    radii: { ...DEFAULT_RADII, ...radii },
    elevations: { ...DEFAULT_ELEVATIONS, ...elevations },
    letterSpacings: { ...DEFAULT_LETTER_SPACINGS, ...letterSpacings },
  })

export type TypefaceName = keyof typeof DEFAULT_TYPEFACES
export type ColorName = keyof typeof DEFAULT_COLORS
export type FontSizeName = keyof typeof DEFAULT_FONT_SIZES
export type LineHeightName = keyof typeof DEFAULT_LINE_HEIGHTS
export type VariantName = keyof typeof DEFAULT_VARIANTS
export type ElevationName = keyof typeof DEFAULT_RADII
export type LetterSpacingName = keyof typeof DEFAULT_LETTER_SPACINGS
