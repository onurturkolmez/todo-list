import { GET_TODO_ITEMS, ADD_TODO_ITEM, DELETE_TODO_ITEM } from "../constants/ActionTypes";

export const getTodoItems = (todoId: string) => ({ type: GET_TODO_ITEMS, payload: todoId });

export const addTodoItem = (todoItem: any) => ({ type: ADD_TODO_ITEM, payload: todoItem });

export const deleteTodoItem = (id: string) => ({ type: DELETE_TODO_ITEM, payload: id });