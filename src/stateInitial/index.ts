import { type initialState } from '../interfaces'

export const initicalState: initialState[] = [
  {
    taskName: 'tarea1',
    pomodoroState: [
      {
        id: 1,
        state: 'inProgress'
      },
      {
        id: 2,
        state: 'Pending'
      },
      {
        id: 2,
        state: 'Completed'
      }
    ]
  },
  {
    taskName: 'tarea2',
    pomodoroState: [
      {
        id: 1,
        state: 'inProgress'
      },
      {
        id: 2,
        state: 'Completed'
      },
      {
        id: 2,
        state: 'Completed'
      }
    ]
  }
]
