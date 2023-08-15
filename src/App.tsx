import React, { useState } from 'react'
import { Button, Nav, CardNewTask } from './components'
import { TaskContainer } from './containers/taskContainer'
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

      <CardNewTask handleShowNewTask={handleShowNewTask} showNewTask={showNewTask} />
    </div>
  )
}

export default App
