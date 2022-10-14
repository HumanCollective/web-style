import { DefaultTheme } from 'styled-components'

export interface SpacingProps {
  width?: number | [number, number]
  minWidth?: number | [number, number]
  maxWidth?: number | [number, number]
  height?: number | [number, number]
  minHeight?: number | [number, number]
  maxHeight?: number | [number, number]
}

export const getSpacing =
  ({ width, height, maxWidth, minWidth, maxHeight, minHeight }: SpacingProps) =>
  ({}: { theme: DefaultTheme }) => {
    let style = ''

    if (typeof width === 'number') {
      style += `width: ${width}px;`
    } else if ((width as [number, number])?.length === 2) {
      style += `
        width: ${(width as [number, number])[0]}px;
        @media (max-width: 960px) {
          width: ${(width as [number, number])[1]}px;
        }
      `
    }

    if (typeof maxWidth === 'number') {
      style += `max-width: ${maxWidth}px;`
    } else if ((maxWidth as [number, number])?.length === 2) {
      style += `
        max-width: ${(maxWidth as [number, number])[0]}px;
        @media (max-width: 960px) {
          max-width: ${(maxWidth as [number, number])[1]}px;
        }
      `
    }

    if (typeof minWidth === 'number') {
      style += `min-width: ${minWidth}px;`
    } else if ((minWidth as [number, number])?.length === 2) {
      style += `
        min-width: ${(minWidth as [number, number])[0]}px;
        @media (max-width: 960px) {
          min-width: ${(minWidth as [number, number])[1]}px;
        }
      `
    }

    if (typeof height === 'number') {
      style += `width: ${height}px;`
    } else if ((height as [number, number])?.length === 2) {
      style += `
        height: ${(height as [number, number])[0]}px;
        @media (max-width: 960px) {
          height: ${(height as [number, number])[1]}px;
        }
      `
    }

    if (typeof maxHeight === 'number') {
      style += `max-height: ${maxHeight}px;`
    } else if ((maxHeight as [number, number])?.length === 2) {
      style += `
        max-height: ${(maxHeight as [number, number])[0]}px;
        @media (max-width: 960px) {
          max-height: ${(maxHeight as [number, number])[1]}px;
        }
      `
    }

    if (typeof minHeight === 'number') {
      style += `min-height: ${minHeight}px;`
    } else if ((minHeight as [number, number])?.length === 2) {
      style += `
        min-height: ${(minHeight as [number, number])[0]}px;
        @media (max-width: 960px) {
          min-height: ${(minHeight as [number, number])[1]}px;
        }
      `
    }

    return style
  }
