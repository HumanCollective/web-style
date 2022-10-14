import { DefaultTheme } from 'styled-components'

export interface RadiusProps {
  radius?: string
}

export const getRadius =
  ({ radius }: RadiusProps) =>
  ({ theme }: { theme: DefaultTheme }) =>
    radius
      ? `
        border-radius: ${theme.radii[radius]}px;
      `
      : ''
