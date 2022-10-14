export interface BorderProps {
  borderWidth?: number
}

export const getBorder = ({ borderWidth }: BorderProps) =>
  borderWidth ? `border-width: ${borderWidth}px;` : ''
