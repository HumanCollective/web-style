import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { DEFAULT_THEME } from '../src/theme'
import { Box } from '../src/components'
import { GlobalStyle } from '../src/globals'

const meta: Meta = {
  title: 'Sizing',
  component: Box,
}

export default meta

const Template: Story = () => (
  <ThemeProvider theme={DEFAULT_THEME}>
    <GlobalStyle />
    <Box
      backgroundColor="Shading.150"
      unitHeight={2}
      unitWidth={2}
      unitsAround={1}
      radius="md"
    />
    <Box
      backgroundColor="Shading.150"
      unitHeight={4}
      unitWidth={6}
      unitsAround={1}
      radius="md"
    />
    <Box
      backgroundColor="Shading.150"
      unitHeight={8}
      unitWidth={12}
      unitsAround={1}
      radius="md"
    />
  </ThemeProvider>
)

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({})

Default.args = {}
