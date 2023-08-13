import React from 'react'
import { Nav, Task } from './components'
import { TaskContainer } from './containers/taskContainer'
import './App.css'

const App = (): JSX.Element => {
  return (
    <div>
      <Nav></Nav>
      <TaskContainer>
        <Task></Task>
      </TaskContainer>
      <TaskContainer>
        <Task></Task>
      </TaskContainer>
    </div>
  )
}

export default App
