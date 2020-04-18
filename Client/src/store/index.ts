import createSagaMiddleware from "redux-saga"
import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers';
import rootSaga from "../sagas";

const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
  console.log("Action type:", action.type);
  console.log("Action payload:", action.payload);
  console.log("State before:", store.getState());
  next(action);
  console.log("State after:", store.getState());
};

const sagaMiddleware = createSagaMiddleware();
let middlewares = applyMiddleware(sagaMiddleware, loggerMiddleware);

export const store = createStore(RootReducer, middlewares);

export default function runSaga() { sagaMiddleware.run(rootSaga) };

