import { type pomodoroState } from '.'

export interface task {
  id?: string
  taskName: string
  pomodoroState: pomodoroState[]
}
