import { css, DefaultTheme } from 'styled-components'

export interface ElevationProps {
  elevation?: keyof DefaultTheme['elevations']
}

export const getElevation = ({ elevation }: ElevationProps) => ({
  theme,
}: {
  theme: DefaultTheme
}) =>
  elevation
    ? css`
        ${theme.elevations[elevation]}
      `
    : ''
