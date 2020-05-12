import axios from 'axios';
import { getTodosUrl, loginUrl, deleteTodoUrl, addTodoUrl, getTodoItemUrl, addTodoItemUrl, updateTodoUrl, deleteTodoItemUrl } from "../constants/APIRoutes";
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
  ADD_TODO,
  GET_TODO_ITEMS_SUCCESS,
  GET_TODO_ITEMS_FAIL,
  GET_TODO_ITEMS,
  ADD_TODO_ITEM_SUCCESS,
  ADD_TODO_ITEM_FAIL,
  ADD_TODO_ITEM,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAIL,
  UPDATE_TODO,
  DELETE_TODO_ITEM_SUCCESS,
  DELETE_TODO_ITEM_FAIL,
  DELETE_TODO_ITEM
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
    yield put({ type: GET_TODOS });
  } catch (error) {
    yield put({ type: SHOW_MESSAGE, payload: { type: 'error', text: `Something went wrong ${error}` } });
    yield put({ type: DELETE_TODO_FAIL, payload: error })
  }
}

function* watchDeleteTodo() {
  yield takeLatest(DELETE_TODO, deleteTodoAsync);
}

const deleteTodoItemApi = (id: string) => (axios.get(deleteTodoItemUrl(id)));

function* deleteTodoItemAsync({ payload }: any) {

  try {
    const { data } = yield call(deleteTodoItemApi, payload);
    console.log("data")
    yield put({ type: SHOW_MESSAGE, payload: { type: 'success', text: 'Your todo item has succesfuly deleted.' } });
    yield put({ type: DELETE_TODO_ITEM_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: SHOW_MESSAGE, payload: { type: 'error', text: `Something went wrong ${error}` } });
    yield put({ type: DELETE_TODO_ITEM_FAIL, payload: error })
  }
}

function* watchDeleteTodoItem() {
  yield takeLatest(DELETE_TODO_ITEM, deleteTodoItemAsync);
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

const updateTodoApi = (todo: any) => (axios.post(updateTodoUrl, { ...todo }));

function* updateTodoAsync({ payload }: any) {

  try {
    const { data } = yield call(updateTodoApi, payload);
    yield put({ type: UPDATE_TODO_SUCCESS, payload: data });
    yield put({ type: SHOW_MESSAGE, payload: { type: 'success', text: 'Your todo list has succesfuly updated.' } });
    yield put({ type: GET_TODOS });
  } catch (error) {
    yield put({ type: UPDATE_TODO_FAIL, payload: error });
    yield put({ type: SHOW_MESSAGE, payload: { type: 'error', text: `Something went wrong ${error}` } });
    yield put({ type: GET_TODOS });
  }
}

function* watchUpdateTodo() {
  yield takeLatest(UPDATE_TODO, updateTodoAsync);
}

const addTodoItemApi = (todoItem: any) => (axios.post(addTodoItemUrl, { ...todoItem }));

function* addTodoItemAsync({ payload }: any) {

  try {
    const { data } = yield call(addTodoItemApi, payload);
    yield put({ type: ADD_TODO_ITEM_SUCCESS, payload: data });
    yield put({ type: SHOW_MESSAGE, payload: { type: 'success', text: 'Your todo item has succesfuly added.' } });
    yield put({ type: GET_TODOS });
  } catch (error) {
    yield put({ type: ADD_TODO_ITEM_FAIL, payload: error });
    yield put({ type: SHOW_MESSAGE, payload: { type: 'error', text: `Something went wrong ${error}` } });
    yield put({ type: GET_TODOS });
  }
}

function* watchAddTodoItem() {
  yield takeLatest(ADD_TODO_ITEM, addTodoItemAsync);
}

const getTodoItem = (todoId: string) => (axios.get(getTodoItemUrl(todoId)));

function* getTodoItemAsync({ payload }: any) {
  try {

    const { data } = yield call(getTodoItem, payload);

    yield put({ type: GET_TODO_ITEMS_SUCCESS, payload: { todoId: payload, data: data.list } });
  } catch (error) {
    yield put({ type: GET_TODO_ITEMS_FAIL, payload: { todoId: payload, msg: error } });
  }
}

function* watchGetTodoItem() {
  yield takeEvery(GET_TODO_ITEMS, getTodoItemAsync);
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
    watchGetTodoItem(),
    watchAddTodoItem(),
    watchUpdateTodo(),
    watchDeleteTodoItem(),
    watchLogin()
  ])
};