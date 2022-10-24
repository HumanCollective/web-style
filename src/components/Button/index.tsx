import React, { FunctionComponent, HTMLProps } from 'react'
import styled from 'styled-components'

import { getSurfaceStyle } from '../Box'
import { Text, TextProps } from '../Text'
import {
  useVariant,
  UnitsAroundProps,
  ColorProps,
  RadiusProps,
  ElevationProps,
  VariantProps,
  SizingProps,
  FlexProps,
} from '../../props'

export interface ButtonProps
  extends UnitsAroundProps,
    ColorProps,
    RadiusProps,
    ElevationProps,
    VariantProps,
    SizingProps,
    FlexProps,
    Omit<TextProps, 'as'>,
    Omit<HTMLProps<HTMLButtonElement>, 'style' | 'height' | 'width'> {
  title: string
  onClick: () => void | Promise<void>
}

const Container = styled.button`
  border: none;
  display: inline-flex;
  ${getSurfaceStyle}
`

export const Button: FunctionComponent<ButtonProps> = ({
  title,
  variant = 'Default',
  disabled,

  as,
  ...rest
}) => {
  const containerStyle = useVariant(
    `Button.${variant}${disabled ? ':disabled' : ''}.Container`,
  )
  const labelStyle = useVariant(
    `Button.${variant}${disabled ? ':disabled' : ''}.Label`,
  )

  return (
    <Container {...containerStyle} {...rest}>
      <Text as="span" {...labelStyle}>
        {title}
      </Text>
    </Container>
  )
}
