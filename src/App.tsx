import React, { useState } from 'react'
import { Button, Nav } from './components'
import { TaskContainer, CardNewTaskContainer } from './containers'
import './App.css'

const App = (): JSX.Element => {
  const [showNewTask, setShowTask] = useState<boolean>(false)

  const handleShowNewTask = (): void => {
    setShowTask(!showNewTask)
  }
  return (
    <div>
      <Nav></Nav>
      <Button onClick={handleShowNewTask}>add nueva nota</Button>
      <TaskContainer />
      <TaskContainer />
      <CardNewTaskContainer handleShowNewTask={handleShowNewTask} showNewTask={showNewTask} />
    </div>
  )
}

export default App
