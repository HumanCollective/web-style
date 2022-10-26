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

interface InputStateProps
  extends UnitsAroundProps,
    ColorProps,
    FontProps,
    CasingProps,
    FontSizeProps,
    LineHeightProps,
    RadiusProps,
    SizingProps {}

export interface InputStates {
  default: InputStateProps
  focused: InputStateProps
  disabled: InputStateProps
}

interface BaseInputProps {
  ref?: Ref<HTMLInputElement>
}

export interface InputStyleProps extends InputStateProps {
  states: InputStates
}

export type InputProps = BaseInputProps & HTMLProps<HTMLInputElement> & {}

const getStyles = (props: InputStateProps = {}) => css`
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
    ${(props) => getStyles(props.states?.focused)}
  }

  &:disabled {
    ${(props) => getStyles(props.states?.disabled)}
  }
`
