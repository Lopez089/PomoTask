import React from 'react'
import { type fild } from '../interfaces'

export const Fild = ({ type, label, value, onChange, name }: fild): JSX.Element => {
  return (
    <div>
      <label>{label}</label>
      <input max={5} min={1} name={name} type={type} value={value} onChange={(e) => { onChange(e) }} />
    </div>
  )
}
