import React, { FunctionComponent, HTMLProps } from 'react'

import { useVariant } from '../../props'
import { Text, TextProps } from '../Text'

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
