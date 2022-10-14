import styled from 'styled-components'

import { Box, BoxProps } from '../Box'
import {
  getHorizontalAlignment,
  getVerticalAlignment,
  HorizontalAlignmentProps,
  VerticalAlignmentProps,
} from '../../props'

export interface ColumnProps
  extends VerticalAlignmentProps,
    HorizontalAlignmentProps,
    BoxProps {}

export const Column = styled(Box)<ColumnProps>`
  border-style: solid;
  flex-direction: column;
  ${getVerticalAlignment('column')}
  ${getHorizontalAlignment('column')}
`
