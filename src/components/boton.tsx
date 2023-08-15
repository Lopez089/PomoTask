import React from 'react'
import { type button } from '../interfaces'

export const Button = ({ children, onClick }: button): JSX.Element => {
  return (
    <button onClick={onClick}>{children}</button>
  )
}
