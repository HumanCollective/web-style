import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { Button, ButtonProps, Column, Fold, Row } from '../src/components'
import { GlobalStyle } from '../src/globals'
import { DEFAULT_THEME } from '../src/theme'
import {
  PrimaryButton,
  DangerButton,
  WarningButton,
  SuccessButton,
  PrimaryOutlineButton,
  DangerOutlineButton,
  PlainButton,
  GhostButton,
} from '../src/theme/variants/Button'

const meta: Meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<ButtonProps> = () => (
  <ThemeProvider theme={DEFAULT_THEME}>
    <GlobalStyle />
    <Fold alignCenter alignMiddle backgroundColor="Shading.125">
      <Column alignCenter alignMiddle style={{ width: 'auto' }}>
        <Row>
          <Column unitsAround={1}>
            <Button
              title="Primary"
              variant={PrimaryButton}
              maxUnitWidth={20}
              unitsAround={1}
            />
            <Button
              title="Disabled"
              variant={PrimaryButton}
              maxUnitWidth={20}
              unitsAround={1}
              disabled
            />
            <Button
              title="Danger"
              variant={DangerButton}
              maxUnitWidth={20}
              unitsAround={1}
            />
            <Button
              title="Warning"
              variant={WarningButton}
              maxUnitWidth={20}
              unitsAround={1}
            />
            <Button
              title="Success"
              variant={SuccessButton}
              maxUnitWidth={20}
              unitsAround={1}
            />
          </Column>
          <Column unitsAround={1}>
            <Button
              title="Primary"
              variant={PrimaryOutlineButton}
              maxUnitWidth={20}
              unitsAround={1}
            />
            <Button
              title="Danger"
              variant={DangerOutlineButton}
              maxUnitWidth={20}
              unitsAround={1}
            />
            <Button
              title="Plain"
              variant={PlainButton}
              maxUnitWidth={20}
              unitsAround={1}
            />
            <Button
              title="Ghost"
              variant={GhostButton}
              maxUnitWidth={20}
              unitsAround={1}
            />
            <Button
              title="Dis. Ghost"
              variant={GhostButton}
              maxUnitWidth={20}
              unitsAround={1}
              disabled
            />
          </Column>
        </Row>
      </Column>
    </Fold>
  </ThemeProvider>
)

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({})

Default.args = {}
