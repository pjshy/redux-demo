export interface Todo {
  id: number
  text: string
  completed: boolean
}

export interface Filter {
  filter: string //show_all, show_completed, show_active
}
