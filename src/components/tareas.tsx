import React from 'react'
import { Clock, PomodoroState, Button } from '.'

export const Task = (): JSX.Element => {
  return (
    <div>
      <p>tarea 1</p>
      <Clock></Clock>
      <PomodoroState></PomodoroState>
      <Button></Button>
    </div >
  )
}
