import React, { FunctionComponent, HTMLProps } from 'react'
import styled, { css, DefaultTheme, ThemeProps } from 'styled-components'

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

interface ContainerStyleProps
  extends UnitsAroundProps,
    ColorProps,
    RadiusProps,
    ElevationProps,
    SizingProps,
    FlexProps,
    TransitionProps,
    CursorProps {}

interface ButtonStateProps {
  containerProps?: ContainerStyleProps
  labelProps?: TextStyleProps
}

export interface ButtonStyleProps
  extends ButtonStateProps,
    ContainerStyleProps {
  states?: { [stateName: string]: ButtonStateProps }
}

export interface ButtonProps
  extends Omit<TextProps, 'as'>,
    Omit<HTMLProps<HTMLButtonElement>, 'style' | 'height' | 'width'> {
  title: string
}

const Label = styled.span``

const getStateStyles = (state?: string) => (
  props: ButtonStyleProps & ThemeProps<DefaultTheme>,
) => css`
  ${getSurfaceStyle({
    ...props?.containerProps,
    ...(state ? props.states?.[state]?.containerProps : {}),
  })}
  ${Label} {
    ${getTextStyle({
      ...props?.labelProps,
      ...(state ? props.states?.[state]?.labelProps : {}),
    })}
  }
`

const Container = styled.button<ButtonStyleProps>`
  border: none;
  display: inline-flex;
  ${getSurfaceStyle}
  ${getStateStyles()}

  ${({ states = {} }) =>
    Object.keys(states).map(
      (state) => css`
        &:${state} {
          ${getStateStyles(state)}
        };
      `,
    )}
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
