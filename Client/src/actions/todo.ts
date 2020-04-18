import { GET_TODOS, DELETE_TODO, ADD_TODO } from "../constants/ActionTypes";
import { ITodo } from "../Interfaces/States";

export const getTodos = () => ({ type: GET_TODOS });
export const deleteTodo = (todoId: string) => ({ type: DELETE_TODO, payload: todoId });
export const addTodo = (todo: any) => ({ type: ADD_TODO, payload: todo });