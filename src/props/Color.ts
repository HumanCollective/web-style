import { DefaultTheme } from 'styled-components'

// Style Props
export interface ColorProps {
  backgroundColor?: keyof DefaultTheme['colors']
  textColor?: keyof DefaultTheme['colors']
  borderColor?: keyof DefaultTheme['colors']
}

const getColor = (
  name: keyof DefaultTheme['colors'] | undefined,
  theme: DefaultTheme,
) => name && theme.colors[name]

export const color = (name?: keyof DefaultTheme['colors']) => ({
  theme,
}: {
  theme: DefaultTheme
}) => getColor(name, theme)

export const getColors = (colorProps: ColorProps) => ({
  theme,
}: {
  theme: DefaultTheme
}) => {
  const settings = { ...theme.defaults, ...colorProps }
  const text = getColor(settings.textColor, theme)
  const background = getColor(settings.backgroundColor, theme)
  const border = getColor(settings.borderColor, theme)

  return `
    ${text ? `color: ${text};` : ''}
    ${background ? `background-color: ${background};` : ''}
    ${border ? `border-color: ${border};` : ''}
  `
}
