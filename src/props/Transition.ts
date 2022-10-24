export interface TransitionProps {
  transition?: string
}

export const getTransition = ({ transition }: TransitionProps) => () =>
  transition ? `transition: ${transition};` : ''
