import { css, DefaultTheme } from 'styled-components'

export interface ElevationProps {
  elevation?: keyof DefaultTheme['elevations']
  interactive?: boolean
}

export const getElevation = ({ elevation, interactive }: ElevationProps) => ({
  theme,
}: {
  theme: DefaultTheme
}) =>
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
