import React from 'react'
import { type pomodoroState } from '../interfaces'

export const PomodoroState = (props: pomodoroState): JSX.Element => {
  const { state } = props

  if (state === 'Pending') { return <p>_</p> }
  if (state === 'inProgress') { return <p>...</p> }

  return <p> X</p>
}
