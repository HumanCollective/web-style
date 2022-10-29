import React, { FunctionComponent, HTMLProps, ReactNode } from 'react'
import NextLink, { LinkProps } from 'next/link'

import { Text, TextProps, TextStyleProps } from '../Text'

export const AnchorLink: FunctionComponent<TextProps &
  TextStyleProps &
  HTMLProps<HTMLAnchorElement>> = ({ children, ...rest }) => (
  <Text as="a" {...rest}>
    {children}
  </Text>
)

export const Link: FunctionComponent<LinkProps &
  TextStyleProps &
  TextProps & {
    children: ReactNode
    anchorProps?: HTMLProps<HTMLAnchorElement>
    target?: '_blank'
  }> = ({
  as,
  children,
  target,
  anchorProps,

  unitsAround,
  unitsAbove,
  unitsBelow,
  unitsLeft,
  unitsRight,
  backgroundColor,
  textColor,
  borderColor,
  font,
  typeface,
  uppercase,
  lowercase,
  capitalize,
  fontSize,
  lineHeight,
  leftText,
  centerText,
  rightText,
  justifyText,
  underline,
  unitWidth,
  minUnitWidth,
  maxUnitWidth,
  unitHeight,
  minUnitHeight,
  maxUnitHeight,
  grow,
  flex,
  shrink,
  letterSpacing,

  ...rest
}) => (
  <NextLink passHref {...rest}>
    <AnchorLink
      unitsAround={unitsAround}
      unitsAbove={unitsAbove}
      unitsBelow={unitsBelow}
      unitsLeft={unitsLeft}
      unitsRight={unitsRight}
      backgroundColor={backgroundColor}
      textColor={textColor}
      borderColor={borderColor}
      font={font}
      typeface={typeface}
      uppercase={uppercase}
      lowercase={lowercase}
      capitalize={capitalize}
      fontSize={fontSize}
      lineHeight={lineHeight}
      leftText={leftText}
      centerText={centerText}
      rightText={rightText}
      justifyText={justifyText}
      underline={underline}
      unitWidth={unitWidth}
      minUnitWidth={minUnitWidth}
      maxUnitWidth={maxUnitWidth}
      unitHeight={unitHeight}
      minUnitHeight={minUnitHeight}
      maxUnitHeight={maxUnitHeight}
      grow={grow}
      flex={flex}
      shrink={shrink}
      letterSpacing={letterSpacing}
      target={target}
      {...anchorProps}
    >
      {children}
    </AnchorLink>
  </NextLink>
)
