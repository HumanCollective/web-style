import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { THEME, Button, ButtonProps } from '../src'

const meta: Meta = {
  title: 'Button',
  component: Button,
  args: {
    title: 'Hello world',
    variant: 'Primary',
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<ButtonProps> = (args) => (
  <ThemeProvider theme={THEME}>
    <Button {...args} />
  </ThemeProvider>
)

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({})

Default.args = {}
