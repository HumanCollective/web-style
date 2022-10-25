import { HTMLProps, Ref } from 'react'
import styled, { css } from 'styled-components'

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

export interface InputStates {
  default: InputStyleProps
  focused: InputStyleProps
  disabled: InputStyleProps
}

interface BaseInputProps {
  ref?: Ref<HTMLInputElement>
}

export type InputProps = BaseInputProps &
  HTMLProps<HTMLInputElement> & {
    states?: InputStates
  }

const getStyles = (props: InputStyleProps) => css`
  ${getFont(props)}
  ${getColors(props)}
  ${getUnitsAround(props)}
  ${getCasing(props)}
  ${getFontSize(props)}
  ${getLineHeight(props)}
  ${getRadius(props)}
`

export const Input = styled.input<InputProps & InputStyleProps>`
  display: flex;
  border: 1px solid transparent;
  ${getStyles}

  &:focus {
    outline: none;
    ${(props) => getStyles({ ...props, ...props.states?.focused })}
  }

  &:disabled {
    outline: none;
    ${(props) => getStyles({ ...props, ...props.states?.disabled })}
  }
`
