import React, { CSSProperties, FunctionComponent, HTMLProps } from 'react'
import styled, { css } from 'styled-components'

import {
  useVariant,
  VariantProps,
  ColorProps,
  getColors,
  getSpaceAround,
  SpaceAroundProps,
  RadiusProps,
  getRadius,
  SpacingProps,
  getSpacing,
  FlexProps,
  getFlex,
  ElevationProps,
  getElevation,
} from '../../props'

type DivProps = HTMLProps<HTMLDivElement>

export interface BoxProps
  extends SpaceAroundProps,
    ColorProps,
    RadiusProps,
    ElevationProps,
    VariantProps,
    SpacingProps,
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
  ${getSpacing(props)}
  ${getColors(props)}
  ${getSpaceAround(props)}
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
