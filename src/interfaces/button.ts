export interface button {
  type?: 'button' | 'submit' | 'reset' | undefined
  children: string
  onClick?: () => void
}
