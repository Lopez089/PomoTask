import { type State } from '../interfaces'

export const initicalState: State = {
  task: [
    {
      taskName: 'tarea1',
      id: '22989389',
      pomodoroState: [
        {
          id: 1234,
          state: 'inProgress'
        },
        {
          id: 22342,
          state: 'Pending'
        },
        {
          id: 2221,
          state: 'Completed'
        }
      ]
    },
    {
      taskName: 'tarea2',
      id: 'jlkjwroiu',
      pomodoroState: [
        {
          id: 1575,
          state: 'inProgress'
        },
        {
          id: 25464,
          state: 'Completed'
        },
        {
          id: 221,
          state: 'Completed'
        }
      ]
    }
  ]
}
