import axios from 'axios';
import { getTodosUrl, loginUrl, deleteTodoUrl, addTodoUrl } from "../constants/APIRoutes";
import {
  GET_TODOS_SUCCESS,
  GET_TODOS_FAIL,
  GET_TODOS,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER,
  DELETE_TODO,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAIL,
  SHOW_MESSAGE,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL,
  ADD_TODO
} from "../constants/ActionTypes";
import { put, call, takeEvery, take, all, takeLatest } from 'redux-saga/effects'

const getTodosApi = () => (axios.get(getTodosUrl));

function* getTodosAsync() {

  try {
    const { data } = yield call(getTodosApi);
    yield put({ type: GET_TODOS_SUCCESS, payload: data.list });
  } catch (error) {
    yield put({ type: GET_TODOS_FAIL, payload: error });
  }
}

function* watchgetTodos() {
  yield takeLatest(GET_TODOS, getTodosAsync);
}

const deleteTodoApi = (todoId: string) => (axios.get(deleteTodoUrl(todoId)));

function* deleteTodoAsync({ payload }: any) {

  try {
    const { data } = yield call(deleteTodoApi, payload);
    yield put({ type: SHOW_MESSAGE, payload: { type: 'success', text: 'Your todo list has succesfuly deleted.' } });
    yield put({ type: DELETE_TODO_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: SHOW_MESSAGE, payload: { type: 'error', text: `Something went wrong ${error}` } });
    yield put({ type: DELETE_TODO_FAIL, payload: error })
  }
}

function* watchDeleteTodo() {
  yield takeLatest(DELETE_TODO, deleteTodoAsync);
}

const addTodoApi = (todo: any) => (axios.post(addTodoUrl, { ...todo }));

function* addTodoAsync({ payload }: any) {

  try {
    const { data } = yield call(addTodoApi, payload);
    yield put({ type: ADD_TODO_SUCCESS, payload: data });
    yield put({ type: SHOW_MESSAGE, payload: { type: 'success', text: 'Your todo list has succesfuly added.' } });
    yield put({ type: GET_TODOS });
  } catch (error) {
    yield put({ type: ADD_TODO_FAIL, payload: error });
    yield put({ type: SHOW_MESSAGE, payload: { type: 'error', text: `Something went wrong ${error}` } });
    yield put({ type: GET_TODOS });
  }
}

function* watchAddTodo() {
  yield takeLatest(ADD_TODO, addTodoAsync);
}

const loginApi = (email: string, password: string) => (axios.post(loginUrl, { email, password }));

function* loginApiAsync(payload: any) {
  try {
    const { data } = yield call(loginApi, payload.email, payload.password);
    yield put({ type: SIGNIN_USER_SUCCESS, payload: data.list });
  } catch (error) {
    console.log("error", error);
  }
}

function* watchLogin() {
  yield takeLatest(SIGNIN_USER, loginApiAsync);
}

export default function* rootSaga() {
  yield all([
    watchAddTodo(),
    watchgetTodos(),
    watchDeleteTodo(),
    watchLogin()
  ])
};