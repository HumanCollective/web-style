import React, { FunctionComponent } from 'react'
import styled, { keyframes } from 'styled-components'

import { color as getColor } from '../../props'
import { ColorName } from '../../theme'

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const DEFAULT_COLOR: ColorName = 'Shading.200'

const SpinnerRing = styled.div<{ color?: ColorName }>`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid ${({ color }) => getColor(color ?? DEFAULT_COLOR)};
    border-radius: 50%;
    animation: ${spinAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ color }) => getColor(color ?? DEFAULT_COLOR)} transparent
      transparent transparent;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
`

interface SpinnerProps {
  color?: ColorName
}

export const Spinner: FunctionComponent<SpinnerProps> = ({ color }) => (
  <SpinnerRing color={color}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </SpinnerRing>
)
