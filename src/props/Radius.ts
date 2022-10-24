import { DefaultTheme } from 'styled-components'

export interface RadiusProps {
  radius?: string
  rounded?: boolean
}

export const getRadius = ({ radius, rounded }: RadiusProps) => ({
  theme,
}: {
  theme: DefaultTheme
}) => {
  const size = radius ?? (rounded ? 'md' : undefined)
  return size ? `border-radius: ${theme.radii[size]}px;` : ''
}
