import { useTheme } from 'styled-components'

export interface VariantProps {
  variant?: string
}

export const useVariant = (variant?: string) => {
  const theme = useTheme()
  const variantProps = variant ? theme.variants?.[variant] : {}
  return variantProps
}
