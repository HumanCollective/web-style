import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { DEFAULT_THEME } from '../src/theme'
import { Link, AnchorLink } from '../src/components'
import { GlobalStyle } from '../src/globals'

const meta: Meta = {
  title: 'Link',
  component: Link,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    children: 'Hello world',
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = () => (
  <ThemeProvider theme={DEFAULT_THEME}>
    <GlobalStyle />
    <Link textColor="Primary.300" unitsBelow={3} href="/">
      NextJS Link
    </Link>
    <br />
    <AnchorLink textColor="Primary.300" unitsAbove={3} href="/">
      Standard Link
    </AnchorLink>
  </ThemeProvider>
)

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({})

Default.args = {}
