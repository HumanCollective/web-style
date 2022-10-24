import React, { CSSProperties, FunctionComponent, HTMLProps } from 'react'
import styled, { css } from 'styled-components'

import {
  useVariant,
  VariantProps,
  ColorProps,
  getColors,
  getUnitsAround,
  UnitsAroundProps,
  RadiusProps,
  getRadius,
  SizingProps,
  getSizing,
  FlexProps,
  getFlex,
  ElevationProps,
  getElevation,
} from '../../props'

type DivProps = HTMLProps<HTMLDivElement>

export interface BoxProps
  extends UnitsAroundProps,
    ColorProps,
    RadiusProps,
    ElevationProps,
    VariantProps,
    SizingProps,
    FlexProps {
  onClick?: DivProps['onClick']
  interactive?: boolean
  style?: Partial<CSSProperties>
}

export const getSurfaceStyle = (props: BoxProps) => css<BoxProps>`
  display: flex;
  position: relative;
  border-style: solid;
  ${
    props.interactive
      ? 'cursor: pointer; transition: all 350ms ease-in-out;'
      : ''
  }
  ${getFlex(props)}
  ${getSizing(props)}
  ${getColors(props)}
  ${getUnitsAround(props)}
  ${getRadius(props)}
  ${getElevation(props)}
`

export const Surface = styled.div<BoxProps>`
  ${getSurfaceStyle}
`

export const Box: FunctionComponent<BoxProps> = ({
  variant = 'Default',
  ...props
}) => {
  const style = useVariant(`Box.${variant}`)
  return <Surface {...style} {...props} />
}
