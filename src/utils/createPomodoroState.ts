import { type pomodoroState } from '../interfaces'

export const createPomodoroState = (repetitions: number): pomodoroState[] => {
  const pomodoroState: pomodoroState[] =
    Array.from({ length: repetitions }, (_, i: number) => {
      return {
        id: Number(i) + 1,
        state: 'Pending'
      }
    })
  return pomodoroState
}
