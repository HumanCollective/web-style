import React, { CSSProperties, FunctionComponent, ReactNode } from 'react'
import styled, { css } from 'styled-components'

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
  getUnitsAround,
  UnitsAroundProps,
  getTextAlign,
  getSizing,
  SizingProps,
  FlexProps,
  getFlex,
  LetterSpacingProps,
  getLetterSpacing,
  TransitionProps,
  getTransition,
} from '../../props'

export interface TextStyleProps
  extends UnitsAroundProps,
    ColorProps,
    FontProps,
    CasingProps,
    FontSizeProps,
    LineHeightProps,
    TextAlignProps,
    UnderlineProps,
    SizingProps,
    FlexProps,
    LetterSpacingProps,
    TransitionProps {}

export interface TextProps {
  as?: keyof JSX.IntrinsicElements
  style?: CSSProperties
  children?: ReactNode
  variant?: TextStyleProps
}

export const getTextStyle = (props: TextStyleProps = {}) => css`
  ${getFlex(props)}
  ${getFont(props)}
  ${getUnderline(props)}
  ${getColors(props)}
  ${getUnitsAround(props)}
  ${getCasing(props)}
  ${getFontSize(props)}
  ${getLineHeight(props)}
  ${getTextAlign(props)}
  ${getSizing(props)}
  ${getLetterSpacing(props)}
  ${getTransition(props)}
`

const StyledText = styled.span<TextStyleProps>`
  ${getTextStyle}
`

export const Text: FunctionComponent<TextProps & TextStyleProps> = ({
  as = 'p',
  variant,
  ...props
}) => <StyledText as={as} {...variant} {...props} />
