import { css } from 'styled-components'

export interface FlexProps {
  grow?: number | true
  flex?: number | true
  shrink?: number | true
}

export const getFlex = ({ grow, flex, shrink }: FlexProps) => css`
  ${flex ? `flex: ${flex === true ? 1 : flex};` : ''}
  ${grow ? `flex-grow: ${grow === true ? 1 : grow};` : ''}
  ${shrink ? `flex-shrink: ${shrink === true ? 1 : shrink};` : ''}
`
