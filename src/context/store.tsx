import React, { createContext } from 'react'
import { initicalState } from '../stateInitial'
import { type store } from '../interfaces'

export const Context = createContext(initicalState)

export const Store = ({ children }: store): JSX.Element => {
  return (
    <Context.Provider value={initicalState}>
      {children}
    </Context.Provider >
  )
}
