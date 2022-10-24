import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { DEFAULT_THEME } from '../src/theme'
import { Row, Spinner } from '../src/components'
import { GlobalStyle } from '../src/globals'

const meta: Meta = {
  title: 'Spinner',
  component: Spinner,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = (args) => (
  <ThemeProvider theme={DEFAULT_THEME}>
    <GlobalStyle />
    <Row>
      <Spinner {...args} size="xs" />
      <Spinner {...args} size="sm" />
      <Spinner {...args} size="md" />
      <Spinner {...args} size="lg" />
      <Spinner {...args} size="xl" />
    </Row>
    <Row>
      <Spinner {...args} color="Primary.300" size="xs" />
      <Spinner {...args} color="Primary.300" size="sm" />
      <Spinner {...args} color="Primary.300" size="md" />
      <Spinner {...args} color="Primary.300" size="lg" />
      <Spinner {...args} color="Primary.300" size="xl" />
    </Row>
  </ThemeProvider>
)

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({})

Default.args = {}
