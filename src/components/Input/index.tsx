import { HTMLProps, Ref } from 'react'
import styled, { css, DefaultTheme, ThemeProps } from 'styled-components'
import {
  UnitsAroundProps,
  ColorProps,
  FontProps,
  CasingProps,
  FontSizeProps,
  LineHeightProps,
  RadiusProps,
  SizingProps,
} from '@shallot-ui/theme'

import {
  getCasing,
  getColors,
  getFont,
  getFontSize,
  getLineHeight,
  getUnitsAround,
  getRadius,
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

interface BaseInputProps {
  ref?: Ref<HTMLInputElement>
}

export interface InputStyleProps extends InputStateProps {
  states?: { [stateName: string]: InputStateProps }
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

const getStateStyles = (state?: string) => (
  props: InputStyleProps & ThemeProps<DefaultTheme>,
) => getStyles({ ...props, ...(state ? props.states?.[state] : {}) })

export const Input = styled.input<InputProps & InputStyleProps>`
  display: flex;
  border: 1px solid transparent;
  ${getStyles}

  ${({ states = {} }) =>
    Object.keys(states).map(
      (state) => css`
        &:${state} {
          ${getStateStyles(state)}
        };
      `,
    )}
`
