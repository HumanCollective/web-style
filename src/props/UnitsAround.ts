import { UnitsAroundProps } from '@shallot-ui/theme'

export const getUnitsAround = ({
  unitsAround,
  unitsAbove,
  unitsBelow,
  unitsLeft,
  unitsRight,
}: UnitsAroundProps) => {
  let styles = ''
  if (typeof unitsAround === 'number') {
    styles += `margin: ${unitsAround * 12}px;`
  }
  if (typeof unitsAbove === 'number') {
    styles += `margin-top: ${unitsAbove * 12}px;`
  }
  if (typeof unitsBelow === 'number') {
    styles += `margin-bottom: ${unitsBelow * 12}px;`
  }
  if (typeof unitsLeft === 'number') {
    styles += `margin-left: ${unitsLeft * 12}px;`
  }
  if (typeof unitsRight === 'number') {
    styles += `margin-right: ${unitsRight * 12}px;`
  }
  return styles
}
