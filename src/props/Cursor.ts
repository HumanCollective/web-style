export interface CursorProps {
  cursor?: string
}

export const getCursor = ({ cursor }: CursorProps) => () =>
  cursor ? `cursor: ${cursor};` : ''
