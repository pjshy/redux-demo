export interface Todo {
  id: number
  text: string
  completed: string
  editing: boolean
}

export type Todos = Todo[]

export interface AppUIState {
  newTodo: boolean
  todos: Todos
  todoFilter: string
}
