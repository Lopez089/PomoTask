import React from 'react'
import { type pomodoroStateContainer } from '../interfaces'
import { PomodoroState } from '../components'

export const PomodoroStateContainer = ({ pomodoroState }: pomodoroStateContainer): JSX.Element => {
  return (

    <div>
      {
        pomodoroState.map(({ id, state }) => {
          return (
            <PomodoroState key={id} state={state} />
          )
        })
      }
    </div >
  )
}
