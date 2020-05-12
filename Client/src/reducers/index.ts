import { combineReducers } from 'redux';
import todoReducer from './todo';
import todoItemReducer from './todoItem';
import authReducer from './auth';

const RootReducer = combineReducers({
  todo: todoReducer,
  auth: authReducer,
  todoItem:todoItemReducer
});

export default RootReducer;