import styled from 'styled-components'

import { Box, BoxProps } from '../Box'
import {
  getHorizontalAlignment,
  getVerticalAlignment,
  HorizontalAlignmentProps,
  VerticalAlignmentProps,
} from '../../props'

export interface RowProps
  extends VerticalAlignmentProps,
    HorizontalAlignmentProps,
    BoxProps {
  wrap?: boolean
}

export const Row = styled(Box)<RowProps>`
  flex-direction: row;
  ${({ wrap }) => (wrap ? 'flex-wrap: wrap;' : '')}
  ${getVerticalAlignment('row')}
  ${getHorizontalAlignment('row')}
`
