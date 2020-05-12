interface ITodoItem {
  name: string
  description: string
  deadline: Date
  status: string
}

export interface ITodo {
  id: string
  name: string
  // items: ITodoItem[]
  items: string[]
}

export interface ITodoState {
  todos: ITodo[]
  loading: boolean
  msg: string
}

interface IMessage {
  show: boolean
  type: string
  text: string
}

export interface IUserState {
  loading: boolean
  initUrl: string
  authUser: string
  msg: IMessage
}

export interface IInitialState {
  todo: ITodoState
  todoItem: any
  auth: IUserState
}