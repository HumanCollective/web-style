import React, { FunctionComponent, HTMLProps, Ref } from 'react'
import styled from 'styled-components'

import {
  ColorProps,
  getCasing,
  getColors,
  getFont,
  getFontSize,
  getLineHeight,
  getPadding,
  PaddingProps,
  FontProps,
  CasingProps,
  FontSizeProps,
  LineHeightProps,
  getSpaceAround,
  SpaceAroundProps,
  getRadius,
  RadiusProps,
  VariantProps,
  useVariant,
  color,
} from '../../props'

interface BaseTextAreaProps
  extends SpaceAroundProps,
    ColorProps,
    FontProps,
    CasingProps,
    FontSizeProps,
    LineHeightProps,
    PaddingProps,
    RadiusProps {
  maxWidth?: number
  ref?: Ref<HTMLTextAreaElement>
}

export const BaseTextArea = styled.textarea<BaseTextAreaProps>`
  display: flex;
  width: 100%;
  border: 1px solid transparent;
  ${({ maxWidth }) => (maxWidth ? `max-width: ${maxWidth}px;` : '')}
  ${({ font, typeface }) => getFont({ font, typeface })}
  ${getColors}
  ${getSpaceAround}
  ${getCasing}
  ${getFontSize}
  ${getLineHeight}
  ${getPadding}
  ${getRadius}

  &:focus {
    outline: none;
    border-color: ${color('Primary.300')};
  }
`

export type TextAreaProps = BaseTextAreaProps &
  VariantProps &
  HTMLProps<HTMLTextAreaElement>

export const TextArea: FunctionComponent<TextAreaProps> = ({
  ref,
  variant = 'Default',
  ...props
}) => {
  const style = useVariant(`TextArea.${variant}`)
  return <BaseTextArea {...style} {...props} />
}
