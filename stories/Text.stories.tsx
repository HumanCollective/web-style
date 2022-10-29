import React from 'react'
import { Meta, Story } from '@storybook/react'
import { DEFAULT_THEME } from '@shallot-ui/theme'
import { ThemeProvider } from 'styled-components'

import { Column, Text, TextProps } from '../src/components'
import { GlobalStyle } from '../src/globals'

const meta: Meta = {
  title: 'Text',
  component: Text,
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

const Template: Story<TextProps> = (args) => (
  <ThemeProvider theme={DEFAULT_THEME}>
    <GlobalStyle />
    <Column>
      <Text {...args} />
      <Text textColor="Primary.100" {...args} />
      <Text textColor="Primary.200" {...args} />
      <Text textColor="Primary.300" {...args} />
      <Text textColor="Primary.400" {...args} />
      <Text textColor="Primary.500" {...args} />
    </Column>
  </ThemeProvider>
)

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({})

Default.args = {}
