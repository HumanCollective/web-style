// styled.d.ts
import { DEFAULT_THEME } from './src'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    defaults: typeof DEFAULT_THEME['defaults']
    breakpoints: typeof DEFAULT_THEME['breakpoints']
    gridUnits: typeof DEFAULT_THEME['gridUnits']
    typefaces: typeof DEFAULT_THEME['typefaces']
    colors: typeof DEFAULT_THEME['colors']
    fontSizes: typeof DEFAULT_THEME['fontSizes']
    lineHeights: typeof DEFAULT_THEME['lineHeights']
    variants: typeof DEFAULT_THEME['variants']
    radii: typeof DEFAULT_THEME['radii']
    elevations: typeof DEFAULT_THEME['elevations']
    letterSpacings: typeof DEFAULT_THEME['letterSpacings']
  }
}
