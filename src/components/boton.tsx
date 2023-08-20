import React from 'react'
import { type button } from '../interfaces'

export const Button = ({ children, onClick, type }: button): JSX.Element => {
  return (
    <button type={type} onClick={onClick}>{children}</button>
  )
}
