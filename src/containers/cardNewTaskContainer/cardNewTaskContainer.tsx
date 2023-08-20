import React, { type ChangeEvent, useState } from 'react'
import { Button, Fild } from '../../components'
import { type cardNewTask } from '../../interfaces'
import { v4 as uuidv4 } from 'uuid'
import './cardNewtaskContainer.css'

export const CardNewTaskContainer = ({ handleShowNewTask, showNewTask }: cardNewTask): JSX.Element => {
  const [newTask, setNewTask] = useState({
    id: '',
    taskName: '',
    pomodoroState: 0
  })
  const showCard = showNewTask ? 'show' : 'hidden'

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

  return (
    <div className={`card_new_task ${showCard}`}>
      <form >
        <span onClick={handleShowNewTask}>X</span>
        <div>
          <h3>NUEVA TAREA</h3>
        </div>
        <Fild label='Tarea' type="text" name='taskName' onChange={handleOnChange} value={newTask.taskName} />
        <Fild label='Tarea' type="number" name='pomodoroState' onChange={handleOnChange} value={newTask.pomodoroState} max={5} min={1} />
        <Button>Agregar nueva tarea</Button>
      </form>

    </div>
  )
}

// const pomodoro = (number: number): void => {
//   Array.from({ length: number }, (_, i) => {
//     return {
//       id: { i },
//       state: 'Pending'
//     }
//   })
// }
// console.log('🚀 ~ file: cardNewTaskContainer.tsx:48 ~ pomodoro ~ pomodoro:', pomodoro)
