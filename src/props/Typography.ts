import { DefaultTheme } from 'styled-components'
import {
  FontSizeName,
  LetterSpacingName,
  LineHeightName,
  TypefaceName,
} from '../theme'

export interface FontProps {
  font?: string
  typeface?: TypefaceName
}

export const getFont = ({ font, typeface }: FontProps) => ({
  theme,
}: {
  theme: DefaultTheme
}) => {
  const { fonts, defaults } =
    (typeface && theme.typefaces[typeface]) ??
    theme.typefaces[theme.defaults.typeface]
  return (font && fonts[font]) ?? fonts[defaults.font]
}

export interface CasingProps {
  uppercase?: boolean
  lowercase?: boolean
  capitalize?: boolean
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

export interface FontSizeProps {
  fontSize?: FontSizeName | FontSizeName[]
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
  const size = fontSizes[fontSize]
  return Array.isArray(size)
    ? makeResponsiveSize(size, breakpoints)
    : makeStaticSize(size)
}

export interface LineHeightProps extends FontSizeProps {
  lineHeight?: LineHeightName
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
  lineHeight = 'md',
  fontSize = 'md',
}: LineHeightProps = {}) => ({ theme }: { theme: DefaultTheme }) => {
  const { fontSizes, lineHeights, gridUnits, breakpoints } = theme
  const ratio = lineHeights[lineHeight]
  const size = fontSizes[fontSize]
  return Array.isArray(size)
    ? makeResponsiveLineHeight(size, ratio, gridUnits, breakpoints)
    : makeStaticLineHeight(size, ratio, gridUnits)
}

export interface TextAlignProps {
  leftText?: boolean
  centerText?: boolean
  rightText?: boolean
  justifyText?: boolean
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

export interface UnderlineProps {
  underline?: boolean | 'hover'
}

export const getUnderline = ({ underline }: UnderlineProps = {}) => {
  if (typeof underline === 'boolean') {
    return `text-decoration: ${underline === true ? 'underline' : 'none'};`
  } else if (underline === 'hover') {
    return '&:hover { text-decoration: underline; }'
  }
  return ''
}

export interface LetterSpacingProps {
  letterSpacing?: LetterSpacingName
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
