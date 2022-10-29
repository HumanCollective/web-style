import { DefaultTheme } from 'styled-components'
import {
  CasingProps,
  FontProps,
  FontSizeProps,
  LineHeightProps,
  UnderlineProps,
  LetterSpacingProps,
  TextAlignProps,
} from '@shallot-ui/theme'

export const getFont = ({ font, typeface }: FontProps) => ({
  theme,
}: {
  theme: DefaultTheme
}) => {
  const typefaceDef =
    (typeface && theme.typefaces[typeface]) ||
    theme.typefaces[theme.defaults.typeface]
  return font && typefaceDef.fonts[font]
    ? typefaceDef.fonts[font]
    : typefaceDef.fonts[typefaceDef.defaults.font]
}

export const getCasing = ({
  uppercase,
  lowercase,
  capitalize,
}: CasingProps = {}) => {
  if (uppercase) return 'text-transform: uppercase;'
  if (lowercase) return 'text-transform: lowercase;'
  if (capitalize) return 'text-transform: capitalize;'
  return ''
}

const makeStaticSize = (size: number) => `font-size: ${size}px;`

const makeResponsiveSize = (sizes: number[], breakpoints: number[]) => {
  const [normal, ...rest] = sizes
  let style = makeStaticSize(normal)
  rest.forEach((size, i) => {
    if (breakpoints[i]) {
      style += `@media (min-width: ${breakpoints[i]}px) { font-size: ${size}px; }`
    }
  })
  return style
}

export const getFontSize = ({ fontSize = 'md' }: FontSizeProps = {}) => ({
  theme,
}: {
  theme: DefaultTheme
}) => {
  const { fontSizes, breakpoints } = theme
  const size = fontSizes[fontSize] as number | number[]
  return Array.isArray(size)
    ? makeResponsiveSize(size, breakpoints)
    : makeStaticSize(size)
}

const snapToGrid = (value: number, gridUnits: number[]) =>
  gridUnits
    .map((u) => {
      const aligned = Math.ceil(value / u) * u
      const diff = Math.abs(value - aligned)
      return [aligned, diff] as [number, number]
    })
    .sort((a: [number, number], b: [number, number]) => a[1] - b[1])[0][0]

const makeStaticLineHeight = (
  size: number,
  ratio: number,
  gridUnits: number[],
) => `line-height: ${snapToGrid(size * ratio, gridUnits)}px;`

const makeResponsiveLineHeight = (
  sizes: number[],
  ratio: number,
  gridUnits: number[],
  breakpoints: number[],
) => {
  const [normal, ...rest] = sizes
  let style = makeStaticLineHeight(normal, ratio, gridUnits)
  rest.forEach((size, i) => {
    if (breakpoints[i]) {
      const aligned = snapToGrid(size * ratio, gridUnits)
      style += `@media (min-width: ${breakpoints[i]}px) {
        line-height: ${aligned}px;
      }`
    }
  })
  return style
}

export const getLineHeight = ({
  lineHeight,
  fontSize,
}: LineHeightProps = {}) => ({ theme }: { theme: DefaultTheme }) => {
  const { fontSizes, lineHeights, gridUnits, breakpoints } = theme
  if (!lineHeight || !fontSize) return ''
  const ratio = lineHeights[lineHeight]
  const size = fontSizes[fontSize] as number | number[]
  return Array.isArray(size)
    ? makeResponsiveLineHeight(size, ratio, gridUnits, breakpoints)
    : makeStaticLineHeight(size, ratio, gridUnits)
}

export const getTextAlign = ({
  leftText,
  centerText,
  rightText,
  justifyText,
}: TextAlignProps = {}) => {
  if (leftText) return 'text-align: left;'
  if (centerText) return 'text-align: center;'
  if (rightText) return 'text-align: right;'
  if (justifyText) return 'text-align: justify;'
  return ''
}

export const getUnderline = ({ underline }: UnderlineProps = {}) => {
  if (typeof underline === 'boolean') {
    return `text-decoration: ${underline === true ? 'underline' : 'none'};`
  } else if (underline === 'under') {
    return 'text-decoration: underline; text-underline-position: under;'
  }
  return ''
}

export const getLetterSpacing = ({
  letterSpacing,
}: LetterSpacingProps = {}) => ({ theme }: { theme: DefaultTheme }) =>
  letterSpacing
    ? `letter-spacing: ${theme.letterSpacings[letterSpacing]}em;`
    : ''

const typographyMixins = {
  getFont,
  getCasing,
  getFontSize,
  getLineHeight,
  getTextAlign,
}

export default typographyMixins
