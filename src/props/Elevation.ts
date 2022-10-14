import { css, DefaultTheme } from 'styled-components'
import { ElevationName } from '../theme'

export interface ElevationProps {
  elevation?: ElevationName
  interactive?: boolean
}

export const getElevation =
  ({ elevation, interactive }: ElevationProps) =>
  ({ theme }: { theme: DefaultTheme }) =>
    elevation
      ? css`
          ${theme.elevations[elevation]}
          ${interactive
            ? css`
                &:hover {
                  ${theme.elevations[`${elevation as 'md'}:hover`]}
                }
                &:active {
                  ${theme.elevations[`${elevation as 'md'}:active`]}
                }
              `
            : ''}
        `
      : ''
