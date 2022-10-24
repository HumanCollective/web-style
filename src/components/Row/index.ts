import styled from 'styled-components'

import { Box, BoxProps, BoxStyleProps } from '../Box'
import {
  getHorizontalAlignment,
  getVerticalAlignment,
  HorizontalAlignmentProps,
  VerticalAlignmentProps,
} from '../../props'

export interface RowStyleProps
  extends VerticalAlignmentProps,
    HorizontalAlignmentProps,
    BoxStyleProps {
  wrap?: boolean
}

export interface RowProps extends BoxProps {}

export const Row = styled(Box)<RowProps & RowStyleProps>`
  flex-direction: row;
  ${({ wrap }) => (wrap ? 'flex-wrap: wrap;' : '')}
  ${getVerticalAlignment('row')}
  ${getHorizontalAlignment('row')}
`
