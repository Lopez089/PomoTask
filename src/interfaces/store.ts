import { type task } from './'
export interface store {
  children: JSX.Element
}

export interface State {
  task: task[]
}

export type Actions =
  | { type: 'addNewTask', payload: task }
