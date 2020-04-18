import { combineReducers } from 'redux';
import todoReducer from './todo';
import authReducer from './auth';

const RootReducer = combineReducers({
  todo: todoReducer,
  auth: authReducer
});

export default RootReducer;