import { makeVar } from '@apollo/client'
interface Task {
  title: string
}

//これがstate
export const todoVar = makeVar<Task[]>([])
