import React, { FunctionComponent, HTMLProps, Ref } from 'react'
import styled from 'styled-components'

import {
  ColorProps,
  getCasing,
  getColors,
  getFont,
  getFontSize,
  getLineHeight,
  FontProps,
  CasingProps,
  FontSizeProps,
  LineHeightProps,
  getUnitsAround,
  UnitsAroundProps,
  getRadius,
  RadiusProps,
  VariantProps,
  useVariant,
  color,
} from '../../props'

interface BaseTextAreaProps
  extends UnitsAroundProps,
    ColorProps,
    FontProps,
    CasingProps,
    FontSizeProps,
    LineHeightProps,
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
  ${getUnitsAround}
  ${getCasing}
  ${getFontSize}
  ${getLineHeight}
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
