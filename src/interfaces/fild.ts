import { type ChangeEvent } from 'react'

export interface fild {
  type: string
  label: string
  value: string | number
  name: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => any
  max?: number
  min?: number
}
