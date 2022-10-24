import { CSSObject } from 'styled-components'

export type Typeface = {
  name: string
  alternates?: string[]
  fonts: Record<string, CSSObject>
  defaults: {
    font: string
  }
}
