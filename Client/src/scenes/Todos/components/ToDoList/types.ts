import { ITodo } from "../../../../Interfaces/States";

export interface Props {
  todo: ITodo
  deleteTodo: () => void
}