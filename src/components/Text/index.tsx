import React, { CSSProperties, FunctionComponent, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { Column } from '../Column'
import {
  ColorProps,
  getCasing,
  getColors,
  getFont,
  getFontSize,
  getLineHeight,
  getUnderline,
  UnderlineProps,
  FontProps,
  CasingProps,
  FontSizeProps,
  LineHeightProps,
  TextAlignProps,
  getSpaceAround,
  SpaceAroundProps,
  getTextAlign,
  useVariant,
  VariantProps,
  getSpacing,
  SpacingProps,
  FlexProps,
  getFlex,
  LetterSpacingProps,
  getLetterSpacing,
} from '../../props'

export interface TextProps
  extends SpaceAroundProps,
    ColorProps,
    FontProps,
    CasingProps,
    FontSizeProps,
    LineHeightProps,
    TextAlignProps,
    UnderlineProps,
    VariantProps,
    SpacingProps,
    FlexProps,
    LetterSpacingProps {
  as?: keyof JSX.IntrinsicElements
  style?: CSSProperties
  children?: ReactNode
}

const getTextStyle = (props?: TextProps = {}) => css<TextProps>`
  ${getFlex(props)}
  ${getFont(props)}
  ${getUnderline(props)}
  ${getColors(props)}
  ${getSpaceAround(props)}
  ${getCasing(props)}
  ${getFontSize(props)}
  ${getLineHeight(props)}
  ${getTextAlign(props)}
  ${getSpacing(props)}
  ${getLetterSpacing(props)}
`

const StyledText = styled.span<TextProps>`
  ${getTextStyle}
`

export const Text: FunctionComponent<TextProps> = ({
  as = 'p',
  variant = 'Default',
  ...props
}) => {
  const style = useVariant(`Text.${variant}`)
  return <StyledText as={as} {...style} {...props} />
}

export const RichText = styled(Column)`
  h1 {
    ${({ theme }) => getTextStyle(theme.variants['Text.H1'])};
  }
  h2 {
    ${({ theme }) => getTextStyle(theme.variants['Text.H2'])};
  }
  h3 {
    ${({ theme }) => getTextStyle(theme.variants['Text.H3'])};
  }
  h4 {
    ${({ theme }) => getTextStyle(theme.variants['Text.H4'])};
  }
  h5 {
    ${({ theme }) => getTextStyle(theme.variants['Text.H5'])};
  }
  h6 {
    ${({ theme }) => getTextStyle(theme.variants['Text.H6'])};
  }
  p {
    ${({ theme }) => getTextStyle(theme.variants['Text.Description'])};
  }
  ul {
    ${({ theme }) => getTextStyle(theme.variants['Text.UnorderedList'])};
  }
  ol {
    ${({ theme }) => getTextStyle(theme.variants['Text.OrderedList'])};
  }
`
