import { DefaultTheme } from 'styled-components'

// Style Props
export interface ColorProps {
  backgroundColor?: keyof DefaultTheme['colors']
  textColor?: keyof DefaultTheme['colors']
  hoverTextColor?: keyof DefaultTheme['colors']
  hoverBackgroundColor?: keyof DefaultTheme['colors']
  borderColor?: keyof DefaultTheme['colors']
  hoverBorderColor?: keyof DefaultTheme['colors']
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

  const colors = {
    text: getColor(settings.textColor, theme),
    background: getColor(settings.backgroundColor, theme),
    border: getColor(settings.borderColor, theme),
  }

  let mainStyles = ''
  if (colors.text) {
    mainStyles += `color: ${colors.text};`
  }
  if (colors.background) {
    mainStyles += `background-color: ${colors.background};`
  }
  if (colors.border) {
    mainStyles += `border-color: ${colors.border};`
  }

  const hoverColors = {
    text: getColor(settings.hoverTextColor, theme),
    background: getColor(settings.hoverBackgroundColor, theme),
    border: getColor(settings.hoverBorderColor, theme),
  }

  let hoverStyles = ''
  if (hoverColors.text) {
    hoverStyles += `color: ${hoverColors.text};`
  }
  if (hoverColors.background) {
    hoverStyles += `background-color: ${hoverColors.background};`
  }
  if (hoverColors.border) {
    hoverStyles += `border-color: ${hoverColors.border};`
  }
  if (hoverStyles !== '') {
    hoverStyles = `&:hover {${hoverStyles}}`
  }

  return [mainStyles, hoverStyles].join(';')
}
