export interface SpaceAroundProps {
  spaceAround?: number
  spaceAbove?: number
  spaceBelow?: number
  spaceLeft?: number
  spaceRight?: number
}

export const getSpaceAround = ({
  spaceAround,
  spaceAbove,
  spaceBelow,
  spaceLeft,
  spaceRight,
}: SpaceAroundProps) => {
  let styles = ''
  if (typeof spaceAround === 'number') {
    styles += `margin: ${spaceAround * 12}px;`
  }
  if (typeof spaceAbove === 'number') {
    styles += `margin-top: ${spaceAbove * 12}px;`
  }
  if (typeof spaceBelow === 'number') {
    styles += `margin-bottom: ${spaceBelow * 12}px;`
  }
  if (typeof spaceLeft === 'number') {
    styles += `margin-left: ${spaceLeft * 12}px;`
  }
  if (typeof spaceRight === 'number') {
    styles += `margin-right: ${spaceRight * 12}px;`
  }
  return styles
}
