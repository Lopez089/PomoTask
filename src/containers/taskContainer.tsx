import React from 'react'
import { type taskContainer } from '../interfaces'

export const TaskContainer = ({ children }: taskContainer): JSX.Element => {
  return (
    <div>{children}</div>
  )
}
