import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { THEME } from '../src/theme'
import { Text, TextProps } from '../src/components'

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
  <ThemeProvider theme={THEME}>
    <Text {...args} />
  </ThemeProvider>
)

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({})

Default.args = {}
