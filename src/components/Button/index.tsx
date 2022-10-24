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

export interface ButtonStyleProps
  extends UnitsAroundProps,
    ColorProps,
    RadiusProps,
    ElevationProps,
    SizingProps,
    FlexProps,
    TransitionProps,
    CursorProps {}

export interface ButtonStateVariant {
  container?: ButtonStyleProps
  label?: TextStyleProps
}

export interface ButtonVariant {
  normal?: ButtonStateVariant
  disabled?: ButtonStateVariant
  hover?: ButtonStateVariant
  active?: ButtonStateVariant
}

export interface ButtonProps
  extends Omit<TextProps, 'as' | 'variant'>,
    Omit<HTMLProps<HTMLButtonElement>, 'style' | 'height' | 'width'> {
  title: string
  onClick: () => void | Promise<void>
  variant?: ButtonVariant
}

const makeSurfaceGetter = (
  ...states: Array<'normal' | 'disabled' | 'hover' | 'active'>
) => ({
  variant,
  ...rest
}: {
  variant?: ButtonVariant
} & ButtonStyleProps) => {
  let styles = {
    cursor: 'pointer',
  }
  states.forEach((state) => {
    styles = { ...styles, ...rest, ...variant?.[state]?.container }
  })
  return getSurfaceStyle(styles)
}

const makeTextGetter = (
  ...states: Array<'normal' | 'disabled' | 'hover' | 'active'>
) => ({
  variant,
  ...rest
}: {
  variant?: ButtonVariant
} & TextStyleProps) => {
  let styles: TextStyleProps = {
    unitsAround: 1,
    flex: 1,
    alignCenter: true,
    alignMiddle: true,
    centerText: true,
  }
  states.forEach((state) => {
    styles = { ...styles, ...rest, ...variant?.[state]?.label }
  })
  return getTextStyle(styles)
}

const Label = styled.span<{ variant?: ButtonVariant }>``

const Container = styled.button<ButtonStyleProps & { variant?: ButtonVariant }>`
  border: none;
  display: inline-flex;

  ${makeSurfaceGetter('normal')}
  ${Label} {
    ${makeTextGetter('normal')}
  }

  &:disabled {
    ${makeSurfaceGetter('normal', 'disabled')}
    ${Label} {
      ${makeTextGetter('normal', 'disabled')}
    }
  }
  &:hover:not(:disabled) {
    ${makeSurfaceGetter('normal', 'hover')}
    ${Label} {
      ${makeTextGetter('normal', 'hover')}
    }
  }
  &:active:not(:disabled) {
    ${makeSurfaceGetter('normal', 'hover', 'active')}
    ${Label} {
      ${makeTextGetter('normal', 'hover', 'active')}
    }
  }
`

export const Button: FunctionComponent<ButtonProps & ButtonStyleProps> = ({
  title,
  variant,
  as,
  ...rest
}) => (
  <Container variant={variant} {...rest}>
    <Label>{title}</Label>
  </Container>
)
