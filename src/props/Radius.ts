import { DefaultTheme } from 'styled-components'
import { RadiusProps } from '@shallot-ui/theme'

export const getRadius = ({ radius, rounded }: RadiusProps) => ({
  theme,
}: {
  theme: DefaultTheme
}) => {
  const size = radius ?? (rounded ? 'md' : undefined)
  return size ? `border-radius: ${theme.radii[size]}px;` : ''
}
