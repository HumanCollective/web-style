import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { DEFAULT_THEME } from '../src/theme'
import { Fold, Input, InputProps } from '../src/components'
import { GlobalStyle } from '../src/globals'
import { defaultInputVariant } from '../src/theme/variants'

const meta: Meta = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'fullscreen',
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<InputProps> = (args) => (
  <ThemeProvider theme={DEFAULT_THEME}>
    <GlobalStyle />
    <Fold alignCenter alignMiddle backgroundColor="Shading.100">
      <Input
        variant={defaultInputVariant}
        unitsAround={1}
        maxUnitWidth={40}
        {...args}
      />
    </Fold>
  </ThemeProvider>
)

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({})

Default.args = {}
