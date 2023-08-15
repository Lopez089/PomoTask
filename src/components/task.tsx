import React from 'react'
import { Clock, Button } from '.'
import { PomodoroStateContainer } from '../containers'
import { type task } from '../interfaces'

export const Task = ({ taskName, pomodoroState }: task): JSX.Element => {
  return (
    <div >
      <p>{taskName}</p>
      <Clock></Clock>
      <PomodoroStateContainer pomodoroState={pomodoroState} />
      <Button></Button>
    </div >
  )
}
