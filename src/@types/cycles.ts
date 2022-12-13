export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startData: Date
  interruptedDate?: Date
  finishedDate?: Date
}
