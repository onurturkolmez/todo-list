import { INIT_URL, SIGNIN_USER_SUCCESS, SIGNIN_USER, SHOW_MESSAGE } from "../constants/ActionTypes";

export const setInitUrl = (url: string) => ({ type: INIT_URL, payload: url });

export const showMessage = (type: string, text: string) => ({ type: SHOW_MESSAGE, payload: { type, text } });

export const login = (email: string, password: string) => ({ type: SIGNIN_USER, payload: { email, password } });