import axios from "axios";

// action types
export const LOGIN = "LOGIN";
export const AUTH_LOADING = "AUTH_LOADING";
export const AUTH_SIGNUP_SUCCESS = "AUTH_SIGNUP_SUCCESS";
export const AUTH_LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS";
export const AUTH_ERROR = "AUTH_ERROR";

//  api config
const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_URI;

const authLoading = () => ({
  type: AUTH_LOADING,
});

const signupSuccess = (user: any) => ({
  type: AUTH_SIGNUP_SUCCESS,
  payload: user,
});

const loginSuccess = (user: any) => ({
  type: AUTH_LOGIN_SUCCESS,
  payload: user,
});

const authError = (error: any) => ({
  type: AUTH_ERROR,
  payload: error,
});

export const signup = (userData: any) => {
  return async (dispatch: any) => {
    dispatch(authLoading());
    try {
      const res = await axios.post(`${BACKEND_API}/signup`, userData);
      dispatch(signupSuccess(res.data));
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return dispatch(authError(message));
    }
  };
};

export const login = (userData: any) => {
  return async (dispatch: any) => {
    dispatch(authLoading());
    try {
      const res = await axios.post(`${BACKEND_API}/signin`, userData);
      dispatch(loginSuccess(res.data));
      localStorage.setItem("cres-todo-user", JSON.stringify(res.data.token));
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      localStorage.removeItem("cres-todo-user");
      return dispatch(authError(message.toString()));
    }
  };
};
