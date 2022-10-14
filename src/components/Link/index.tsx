import React, { FunctionComponent, HTMLProps, ReactNode } from 'react'
import NextLink, { LinkProps } from 'next/link'

import { Text, TextProps } from '../Text'
import { useVariant, VariantProps } from '../../props'

export const AnchorLink: FunctionComponent<TextProps &
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
  VariantProps & {
    children: ReactNode
    anchorProps?: TextProps & HTMLProps<HTMLAnchorElement>
    target?: '_blank'
  }> = ({ as, variant, children, anchorProps, target, ...rest }) => (
  <NextLink passHref {...rest}>
    <AnchorLink variant={variant} target={target} {...anchorProps}>
      {children}
    </AnchorLink>
  </NextLink>
)
