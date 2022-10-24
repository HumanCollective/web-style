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

interface BaseInputProps
  extends UnitsAroundProps,
    ColorProps,
    FontProps,
    CasingProps,
    FontSizeProps,
    LineHeightProps,
    RadiusProps {
  maxWidth?: number
  ref?: Ref<HTMLInputElement>
}

export const BaseInput = styled.input<BaseInputProps>`
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

export type InputProps = BaseInputProps &
  VariantProps &
  HTMLProps<HTMLInputElement>

export const Input: FunctionComponent<InputProps> = ({
  ref,
  variant = 'Default',
  ...props
}) => {
  const style = useVariant(`Input.${variant}`)
  return <BaseInput {...style} {...props} />
}
