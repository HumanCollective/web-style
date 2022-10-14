import { CSSObject } from 'styled-components'
import {
  ColorName,
  ElevationName,
  FontSizeName,
  LetterSpacingName,
  LineHeightName,
  TypefaceName,
} from '../theme'

export interface Palette {
  background: string
  foreground: string
}

export type Typeface = {
  name: string
  alternates?: string[]
  fonts: Record<string, CSSObject>
  defaults: {
    font: string
  }
}

export type ResponsiveThemeValue<T> = [T, T]

export interface Theme {
  defaults: { typeface: TypefaceName }
  typefaces: Record<TypefaceName, Typeface>
  colors: Record<ColorName, string>
  lineHeights: Record<LineHeightName, number>
  fontSizes: Record<FontSizeName, ResponsiveThemeValue<number>>
  variants: Record<string, any>
  radii: Record<string, number>
  elevations: Record<ElevationName, CSSObject>
  letterSpacings: Record<LetterSpacingName, number>
}
