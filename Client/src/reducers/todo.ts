import { GET_TODOS, GET_TODOS_SUCCESS, GET_TODOS_FAIL } from "../constants/ActionTypes"
import { ITodoState } from "../Interfaces/States"

const initialState: ITodoState = {
  todos: [],
  loading: true,
  msg: ""
}

const todoReducer = (state = initialState, { type, payload }: any): ITodoState => {

  switch (type) {
    case GET_TODOS:
      return { ...state, todos: [], loading: true, msg: "" }
    case GET_TODOS_SUCCESS:
      return { ...state, todos: payload, loading: false, msg: "" }
    case GET_TODOS_FAIL:
      return { ...state, todos: [], loading: false, msg: payload }
    default:
      return state;
  }
}

export default todoReducer;