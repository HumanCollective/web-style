import React, { FunctionComponent, HTMLProps, ReactNode } from 'react'
import NextLink, { LinkProps } from 'next/link'

import { Text, TextProps, TextStyleProps } from '../Text'
import { useVariant, VariantProps } from '../../props'

export const AnchorLink: FunctionComponent<TextProps &
  TextStyleProps &
  HTMLProps<HTMLAnchorElement>> = ({
  children,
  variant = 'Default',
  ...rest
}) => {
  const style = useVariant(`Link.${variant}`)
  return (
    <Text as="a" {...style} {...rest}>
      {children}
    </Text>
  )
}

export const Link: FunctionComponent<LinkProps &
  TextStyleProps &
  VariantProps &
  TextProps & {
    children: ReactNode
    anchorProps?: HTMLProps<HTMLAnchorElement>
    target?: '_blank'
  }> = ({
  as,
  children,
  target,
  anchorProps,

  variant,
  unitsAround,
  unitsAbove,
  unitsBelow,
  unitsLeft,
  unitsRight,
  backgroundColor,
  textColor,
  hoverTextColor,
  hoverBackgroundColor,
  borderColor,
  hoverBorderColor,
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
      variant={variant}
      unitsAround={unitsAround}
      unitsAbove={unitsAbove}
      unitsBelow={unitsBelow}
      unitsLeft={unitsLeft}
      unitsRight={unitsRight}
      backgroundColor={backgroundColor}
      textColor={textColor}
      hoverTextColor={hoverTextColor}
      hoverBackgroundColor={hoverBackgroundColor}
      borderColor={borderColor}
      hoverBorderColor={hoverBorderColor}
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
