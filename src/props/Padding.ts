export interface PaddingProps {
  paddingAround?: number
  paddingAbove?: number
  paddingBelow?: number
  paddingLeft?: number
  paddingRight?: number
}

export const getPadding = ({
  paddingAround,
  paddingAbove,
  paddingBelow,
  paddingLeft,
  paddingRight,
}: PaddingProps) => {
  let styles = ''
  if (paddingAround) {
    styles += `padding: ${paddingAround * 12}px;`
  }
  if (paddingAbove) {
    styles += `padding-top: ${paddingAbove * 12}px;`
  }
  if (paddingBelow) {
    styles += `padding-bottom: ${paddingBelow * 12}px;`
  }
  if (paddingLeft) {
    styles += `padding-left: ${paddingLeft * 12}px;`
  }
  if (paddingRight) {
    styles += `padding-right: ${paddingRight * 12}px;`
  }
  return styles
}
