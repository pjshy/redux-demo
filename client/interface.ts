export interface Todo {
  id: number
  text: string
  completed: boolean
}

export type Filter = string  //show_all, show_completed, show_active

export interface AppState {
  todos: Todo[],
  filter: Filter
}
