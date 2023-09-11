import React, { type ChangeEvent, type FormEvent, useState, useContext } from 'react'
import { Button, Fild } from '../../components'
import { type cardNewTask } from '../../interfaces'
import './cardNewtaskContainer.css'
import { Context } from '../../context/store'
import { v4 as uuidv4 } from 'uuid'
import { createPomodoroState } from '../../utils'

export const CardNewTaskContainer = ({ handleShowNewTask, showNewTask }: cardNewTask): JSX.Element => {
  const [newTask, setNewTask] = useState({
    id: '',
    taskName: '',
    pomodoroState: 0
  })
  const showCard = showNewTask ? 'show' : 'hidden'
  const { dispatch } = useContext(Context)

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target

    setNewTask(
      {
        ...newTask,
        id: uuidv4(),
        [name]: value
      }
    )
  }

  const handleNewTask = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    const newTaskPomodoro = {
      ...newTask,
      pomodoroState: createPomodoroState(newTask.pomodoroState)
    }

    dispatch({ type: 'addNewTask', payload: newTaskPomodoro })
  }

  return (
    <div className={`card_new_task ${showCard}`}>
      <form onSubmit={(e) => { handleNewTask(e) }}>
        <span onClick={handleShowNewTask}>X</span>
        <div>
          <h3>NUEVA TAREA</h3>
        </div>
        <Fild
          label='Tarea'
          type="text"
          name='taskName'
          onChange={(e) => { handleOnChange(e) }}
          value={newTask.taskName}
        />
        <Fild
          label='Tarea'
          type="number"
          name='pomodoroState'
          onChange={handleOnChange}
          value={newTask.pomodoroState}
          max={5}
          min={1}
        />
        <Button>Agregar nueva tarea</Button>
      </form>

    </div>
  )
}
