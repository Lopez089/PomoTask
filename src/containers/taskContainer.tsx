import React, { useContext } from 'react'
import { Context } from '../context/store'
import { type task } from '../interfaces'
import { Task } from '../components'

export const TaskContainer = (): JSX.Element => {
  const state = useContext<task[]>(Context)

  return (
    <>
      <h2>New task</h2>
      <div>
        {
          state.map(({ taskName, id, pomodoroState }: task): JSX.Element => {
            return (
              <Task
                key={id}
                taskName={taskName}
                id={id}
                pomodoroState={pomodoroState}
              />)
          })
        }
      </div>
    </>
  )
}
