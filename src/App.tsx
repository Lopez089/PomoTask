import React from 'react'
import { Nav } from './components'
import { TaskContainer } from './containers/taskContainer'
import './App.css'

const App = (): JSX.Element => {
  return (
    <div>
      <Nav></Nav>
      <TaskContainer />
      <TaskContainer />
    </div>
  )
}

export default App
