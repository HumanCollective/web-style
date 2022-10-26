import React, { FunctionComponent, HTMLProps } from 'react'
import styled from 'styled-components'

import { getSurfaceStyle } from '../Box'
import { getTextStyle, TextProps, TextStyleProps } from '../Text'
import {
  UnitsAroundProps,
  ColorProps,
  RadiusProps,
  ElevationProps,
  SizingProps,
  FlexProps,
  CursorProps,
  TransitionProps,
} from '../../props'

export interface ContainerStyleProps
  extends UnitsAroundProps,
    ColorProps,
    RadiusProps,
    ElevationProps,
    SizingProps,
    FlexProps,
    TransitionProps,
    CursorProps {}

export interface ButtonState {
  containerProps?: ContainerStyleProps
  labelProps?: TextStyleProps
}

export interface ButtonStates {
  disabled?: ButtonState
  hover?: ButtonState
  active?: ButtonState
}

export interface ButtonStyleProps extends ButtonState {
  states?: ButtonStates
}

export interface ButtonProps
  extends Omit<TextProps, 'as'>,
    Omit<HTMLProps<HTMLButtonElement>, 'style' | 'height' | 'width'> {
  title: string
}

const Label = styled.span<{ states?: ButtonStates }>``

const Container = styled.button<ButtonStyleProps>`
  border: none;
  display: inline-flex;

  ${(props) => getSurfaceStyle(props.containerProps)}
  ${Label} {
    ${(props) => getTextStyle(props.labelProps)}
  }

  &:disabled {
    ${(props) => getSurfaceStyle(props.states?.disabled?.containerProps)}
    ${Label} {
      ${(props) => getTextStyle(props.states?.disabled?.labelProps)}
    }
  }

  &:hover:not(:disabled) {
    ${(props) => getSurfaceStyle(props.states?.hover?.containerProps)}
    ${Label} {
      ${(props) => getTextStyle(props.states?.hover?.labelProps)}
    }
  }
  &:active:not(:disabled) {
    ${(props) => getSurfaceStyle(props.states?.active?.containerProps)}
    ${Label} {
      ${(props) => getTextStyle(props.states?.active?.labelProps)}
    }
  }
`

export const Button: FunctionComponent<ButtonProps & ButtonStyleProps> = ({
  title,
  as,
  ref,
  ...rest
}) => (
  <Container {...rest}>
    <Label>{title}</Label>
  </Container>
)
