import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { THEME } from '../src/theme'
import { GlobalStyle } from '../src/globals'
import { RichText, TextProps } from '../src/components'

const meta: Meta = {
  title: 'RichText',
  component: RichText,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<Omit<TextProps, 'children'>> = (args) => (
  <ThemeProvider theme={THEME}>
    <GlobalStyle />
    <RichText {...args}>
      <h1>Lorem Ipsum Dolor Sit Amet</h1>
      <p>
        Ut eleifend euismod leo et laoreet. Nullam eget eleifend ipsum. Mauris
        sed bibendum tellus. Sed vitae porta sapien, eget faucibus urna. Etiam
        aliquam mauris at magna tincidunt convallis. Ut vestibulum, ipsum
        condimentum faucibus faucibus, massa sem euismod felis, ac luctus leo
        lacus ac odio. Nulla scelerisque ut quam nec ultricies. Vivamus semper
        mollis congue. Sed in facilisis ipsum. Integer tempus, tortor nec
        finibus maximus, elit augue ultricies erat, vel facilisis felis tortor
        ac sapien.
      </p>
      <ol>
        <li>Massa sem euismod felis, ac luctus.</li>
        <li>Ut vestibulum, ipsum condimentum faucibus faucibus.</li>
        <li>Nulla scelerisque ut quam nec ultricies.</li>
      </ol>
      <h2>Maecenas Gravida Mauris Quis Tempor</h2>
      <p>
        Nunc tincidunt, nunc eget suscipit porttitor, justo erat vulputate
        turpis, quis feugiat nibh augue euismod neque. Integer tincidunt
        vehicula consectetur. Morbi mollis fringilla mollis. Fusce in lectus et
        nisl posuere vehicula a a massa. Nam suscipit commodo justo non
        tincidunt. Nullam tincidunt mattis imperdiet. Vivamus finibus aliquam
        ipsum, vel vehicula risus rhoncus sed. Nunc ut odio sed risus luctus
        pharetra.
      </p>
      <ul>
        <li>Nullam eget eleifend ipsum</li>
        <li>Ut vestibulum, ipsum condimentum faucibus faucibus</li>
        <li>Integer tempus, tortor nec finibus maximus</li>
      </ul>
      <h2>Vivamus Eleifend Ex Ut Faucibus</h2>
      <p>
        Curabitur nulla dolor, bibendum ac justo eget, tristique blandit nisi.
        Aliquam bibendum consectetur metus a congue. Sed pharetra laoreet ante
        vitae interdum. Nunc ut faucibus neque. Donec volutpat vehicula ipsum,
        et tempus dolor sagittis ut. Aliquam ex sapien, pellentesque id
        ultricies sit amet, porta et quam. Praesent placerat augue vel
        pellentesque ultrices. Duis a lacus faucibus, imperdiet turpis eu,
        interdum eros. Aliquam vulputate euismod lectus, eget convallis turpis
        mollis vitae.
      </p>
      <h3>Vivamus Eleifend Ex Ut Faucibus</h3>
      <p>
        Nullam ultrices, libero vitae sollicitudin vestibulum, erat mi feugiat
        tortor, non fermentum sapien ante sit amet orci. Donec consectetur dui
        in eros vulputate fringilla.
      </p>
      <h3>Ut Sagittis Mollis Luctus</h3>
      <p>
        Nulla facilisi. Nullam cursus dui eros, quis fringilla tellus varius a.
        Pellentesque scelerisque est nec velit vestibulum consectetur. Praesent
        posuere quam vel ligula interdum, quis tempus turpis blandit. Donec
        tempor, nibh in imperdiet pulvinar, odio ante fringilla lectus, at
        lobortis magna purus non nisi.
      </p>
      <h4>H4 — Maecenas A Accumsan Eros</h4>
      <h5>H5 — Erat Mi Feugiat Tortor</h5>
      <h6>H6 — Dictum Ligula Sit Amet</h6>
    </RichText>
  </ThemeProvider>
)

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({})

Default.args = {}
