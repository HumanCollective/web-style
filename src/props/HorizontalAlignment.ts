export interface HorizontalAlignmentProps {
  alignLeft?: true
  alignRight?: true
  alignCenter?: true
}

export const getHorizontalAlignment =
  (flexDirection: 'row' | 'column') =>
  ({
    alignLeft,
    alignRight,
    alignCenter,
  }: {
    alignLeft?: true
    alignRight?: true
    alignCenter?: true
  }) => {
    if (alignLeft) {
      return flexDirection === 'row'
        ? 'justify-content: flex-start;'
        : 'align-items: flex-start;'
    }
    if (alignRight) {
      return flexDirection === 'row'
        ? 'justify-content: flex-end;'
        : 'align-items: flex-end;'
    }
    if (alignCenter) {
      return flexDirection === 'row'
        ? 'justify-content: center;'
        : 'align-items: center;'
    }
    return undefined
  }
