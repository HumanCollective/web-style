import styled from 'styled-components'

import { Box, BoxProps, BoxStyleProps } from '../Box'
import { getHorizontalAlignment, getVerticalAlignment } from '../../props'
import {
  HorizontalAlignmentProps,
  VerticalAlignmentProps,
} from '@shallot-ui/theme'

export interface ColumnStyleProps
  extends VerticalAlignmentProps,
    HorizontalAlignmentProps,
    BoxStyleProps {}

export interface ColumnProps extends BoxProps {}

export const Column = styled(Box)<ColumnProps & ColumnStyleProps>`
  border-style: solid;
  flex-direction: column;
  ${getVerticalAlignment('column')}
  ${getHorizontalAlignment('column')}
`
