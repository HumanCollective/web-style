// styled.d.ts
import { DEFAULT_THEME } from './src'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    defaults: typeof projectTheme.defaults
    breakpoints: typeof projectTheme.breakpoints
    gridUnits: typeof projectTheme.gridUnits
    typefaces: typeof projectTheme.typefaces
    colors: typeof projectTheme.colors
    fontSizes: typeof projectTheme.fontSizes
    lineHeights: typeof projectTheme.lineHeights
    variants: typeof projectTheme.variants
    radii: typeof projectTheme.radii
    elevations: typeof projectTheme.elevations
    letterSpacings: typeof projectTheme.letterSpacings
  }
}
