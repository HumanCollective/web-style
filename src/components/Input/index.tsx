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
  color,
  SizingProps,
} from '../../props'

interface InputStyleProps
  extends UnitsAroundProps,
    ColorProps,
    FontProps,
    CasingProps,
    FontSizeProps,
    LineHeightProps,
    RadiusProps,
    SizingProps {}

export interface InputVariant {
  default: InputStyleProps
  disabled: InputStyleProps
}

interface BaseInputProps {
  ref?: Ref<HTMLInputElement>
}

export const BaseInput = styled.input<InputStyleProps>`
  display: flex;
  border: 1px solid transparent;
  ${getFont}
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
  HTMLProps<HTMLInputElement> & {
    variant?: InputVariant
  }

export const Input: FunctionComponent<InputProps & InputStyleProps> = ({
  ref,
  variant,
  disabled,
  ...props
}) => {
  const selectedVariant = variant?.[disabled ? 'disabled' : 'default']
  return <BaseInput {...selectedVariant} {...props} />
}
