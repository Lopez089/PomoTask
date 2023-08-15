import React from 'react'
import { Button } from '..'
import './cardNewtask.css'

interface cardNewTask {
  handleShowNewTask: () => void
  showNewTask: boolean
}

export const CardNewTask = ({ handleShowNewTask, showNewTask }: cardNewTask): JSX.Element => {
  const showCard = showNewTask ? 'show' : 'hidden'

  return (
    <div className={`card_new_task ${showCard}`}>
      <form>
        <span onClick={handleShowNewTask}>X</span>
        <div>
          <h3>NUEVA TAREA</h3>
        </div>
        <div>
          <label>Nombre Tarea</label>
          <input type="text" />
        </div>
        <div>
          <label>¿Cuantos pomodoros necesitas para realizar esta tarea?</label>
          <input type="number" max={5} min={1} />
        </div>
        <Button onClick={() => { console.log('fun') }}>Agregar nueva tarea</Button>
      </form>

    </div>
  )
}
