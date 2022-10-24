import { DefaultTheme } from 'styled-components'

export interface SizingProps {
  unitWidth?: number | number[]
  minUnitWidth?: number | number[]
  maxUnitWidth?: number | number[]
  unitHeight?: number | number[]
  minUnitHeight?: number | number[]
  maxUnitHeight?: number | number[]
}

const makeStaticSize = (cssProperty: string, units: number, grid: number) =>
  `${cssProperty}: ${units * grid}px;`

const makeResponsiveSize = (
  cssProperty: string,
  responsiveUnits: number[],
  grid: number,
  breakpoints: number[],
) =>
  responsiveUnits
    .map((u, i) => {
      const bp = breakpoints[i]
      return (
        bp ?? `@media (min-width: ${bp}px) { ${cssProperty}: ${u * grid}px; }`
      )
    })
    .filter(Boolean)
    .join('')

const makeSize = (
  cssProperty: string,
  units: number | number[] | undefined,
  grid: number,
  breakpoints: number[],
) => {
  if (Array.isArray(units)) {
    return makeResponsiveSize(cssProperty, units, grid, breakpoints)
  }
  if (typeof units === 'number') {
    return makeStaticSize(cssProperty, units, grid)
  }
  return ''
}

export const getSizing = ({
  unitWidth,
  minUnitWidth,
  maxUnitWidth,
  unitHeight,
  minUnitHeight,
  maxUnitHeight,
}: SizingProps) => ({ theme }: { theme: DefaultTheme }) => {
  const { gridUnits, breakpoints } = theme
  const grid = gridUnits[0]
  return [
    makeSize('width', unitWidth, grid, breakpoints),
    makeSize('min-width', minUnitWidth, grid, breakpoints),
    makeSize('max-width', maxUnitWidth, grid, breakpoints),
    makeSize('height', unitHeight, grid, breakpoints),
    makeSize('min-height', minUnitHeight, grid, breakpoints),
    makeSize('max-height', maxUnitHeight, grid, breakpoints),
  ].join('')
}
