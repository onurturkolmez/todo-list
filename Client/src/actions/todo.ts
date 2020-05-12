import { GET_TODOS, DELETE_TODO, ADD_TODO, UPDATE_TODO } from "../constants/ActionTypes";
import { ITodo } from "../Interfaces/States";

export const getTodos = () => ({ type: GET_TODOS });
export const deleteTodo = (id: string) => ({ type: DELETE_TODO, payload: id });
export const addTodo = (todo: any) => ({ type: ADD_TODO, payload: todo });
export const updateTodo = (todo: any) => ({ type: UPDATE_TODO, payload: todo });