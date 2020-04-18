import { INIT_URL, SIGNIN_USER_SUCCESS, SHOW_MESSAGE } from "../constants/ActionTypes"
import { IUserState, IInitialState } from "../Interfaces/States"

const initialState: IUserState = {
  loading: false,
  initUrl: '',
  // authUser: localStorage.getItem("jwtToken"),
  authUser: "dsadasdas",
  msg: { show: false, type: '', text: '' }
}

const authReducer = (state = initialState, { type, payload }: any): IUserState => {

  switch (type) {
    case INIT_URL:
      return { ...state, initUrl: payload }
    case SIGNIN_USER_SUCCESS:
      return { ...state, loading: true }
    case SIGNIN_USER_SUCCESS:
      return { ...state, loading: false, authUser: payload }
    case SHOW_MESSAGE:
      const { type, text } = payload;
      return { ...state, msg: { show: true, type, text } }
    default:
      return state;
  }
}

export default authReducer;