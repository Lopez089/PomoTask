import React, { createContext, useReducer } from 'react'
import { initicalState } from '../stateInitial'
import { type store, type State, type Actions } from '../interfaces'

export const Context = createContext<{
  state: State
  dispatch: React.Dispatch<Actions>
}>(
  {
    state: initicalState,
    dispatch: () => null
  }
)

export const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case 'addNewTask':
      return {
        task: [...state.task, action.payload]
      }
    default:
      return state
  }
}

export const Store = ({ children }: store): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initicalState)

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider >
  )
}
