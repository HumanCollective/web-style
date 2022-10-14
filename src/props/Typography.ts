import { css, DefaultTheme } from 'styled-components'
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

export const getFont =
  ({ font, typeface }: FontProps) =>
  ({ theme }: { theme: DefaultTheme }) => {
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
}: CasingProps = {}) =>
  capitalize ?? lowercase ?? uppercase
    ? `
        ${capitalize ? 'text-transform: capitalize;' : ''}
        ${lowercase ? 'text-transform: lowercase;' : ''}
        ${uppercase ? 'text-transform: uppercase;' : ''}
      `
    : ''

export interface FontSizeProps {
  fontSize?: FontSizeName | number[] | number
}
export const getFontSize =
  ({ fontSize = 'md' }: FontSizeProps = {}) =>
  ({ theme }: { theme: DefaultTheme }) => {
    if (Array.isArray(fontSize)) {
      return `
        font-size: ${fontSize[0]}px;
        @media (max-width: 960px) {
          font-size: ${fontSize[1]}px;
        }
      `
    }
    if (typeof fontSize === 'number') {
      return `
        font-size: ${fontSize}px;
      `
    }
    return `
      font-size: ${theme.fontSizes[fontSize][0]}px;
      @media (max-width: 960px) {
        font-size: ${theme.fontSizes[fontSize][1]}px;
      }
    `
  }

export interface LineHeightProps extends FontSizeProps {
  lineHeight?: LineHeightName
}

const snapToGrid = (value: number) => Math.round(value / 6) * 6

export const getLineHeight =
  ({ lineHeight, fontSize = 'md' }: LineHeightProps = {}) =>
  ({ theme }: { theme: DefaultTheme }) => {
    if (!lineHeight) {
      return ''
    }
    const ratio = theme.lineHeights[lineHeight]
    if (Array.isArray(fontSize)) {
      return `
        line-height: ${snapToGrid(ratio * fontSize[0])}px;
        @media (max-width: 960px) {
          line-height: ${snapToGrid(ratio * fontSize[1])}px;
        }
      `
    }
    if (typeof fontSize === 'number') {
      return `
      line-height: ${snapToGrid(ratio * fontSize)}px;
      `
    }
    return `
      line-height: ${snapToGrid(ratio * theme.fontSizes[fontSize][0])}px;
      @media (max-width: 960px) {
        line-height: ${snapToGrid(ratio * theme.fontSizes[fontSize][1])}px;
      }
    `
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
}: TextAlignProps = {}) =>
  `
      ${leftText ? 'text-align: left;' : ''}
      ${centerText ? 'text-align: center;' : ''}
      ${rightText ? 'text-align: right;' : ''}
      ${justifyText ? 'text-align: justify;' : ''}
    `
export interface UnderlineProps {
  underline?: boolean | 'hover'
}
export const getUnderline = ({ underline }: UnderlineProps = {}) =>
  typeof underline !== 'undefined'
    ? css`
        text-decoration: ${underline === true ? 'underline' : 'none'};
        ${underline === 'hover'
          ? css`
              &:hover {
                text-decoration: underline;
              }
            `
          : ''};
      `
    : ''

export interface LetterSpacingProps {
  letterSpacing?: LetterSpacingName
}
export const getLetterSpacing =
  ({ letterSpacing }: LetterSpacingProps = {}) =>
  ({ theme }: { theme: DefaultTheme }) =>
    letterSpacing
      ? `
        letter-spacing: ${theme.letterSpacings[letterSpacing]}em;
      `
      : ''

const typographyMixins = {
  getFont,
  getCasing,
  getFontSize,
  getLineHeight,
  getTextAlign,
}

export default typographyMixins
