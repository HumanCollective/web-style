import { DefaultTheme } from 'styled-components'
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
  ProjectTypefaces,
  ProjectColors,
  ProjectFontSizes,
  ProjectLineHeights,
  ProjectVariants,
  ProjectRadii,
  ProjectElevations,
  ProjectLetterSpacings
>({
  defaults = {} as ProjectDefaults,
  breakpoints = null as number[] | null,
  gridUnits = null as number[] | null,
  typefaces = {} as ProjectTypefaces,
  colors = {} as ProjectColors,
  fontSizes = {} as ProjectFontSizes,
  lineHeights = {} as ProjectLineHeights,
  variants = {} as ProjectVariants,
  radii = {} as ProjectRadii,
  elevations = {} as ProjectElevations,
  letterSpacings = {} as ProjectLetterSpacings,
} = {}) =>
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

export const DEFAULT_THEME = makeTheme()
