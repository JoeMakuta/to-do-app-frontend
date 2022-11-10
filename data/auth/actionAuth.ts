import axios from "axios";

export const LOGIN = "LOGIN";
export const AUTH_LOADING = "AUTH_LOADING";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_ERROR = "AUTH_ERROR";

//  api config
const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_URI;

//
const authLoading = () => ({
  type: AUTH_LOADING,
});

//
const authSuccess = (user: any) => ({
  type: AUTH_SUCCESS,
  payload: user,
});

//
const authError = (error: any) => ({
  type: AUTH_ERROR,
  payload: error,
});

export const login = (userData: any) => {
  return async (dispatch: any) => {
    dispatch(authLoading());
    try {
      const res = await axios.post(`${BACKEND_API}/signin`, userData);
      dispatch(authSuccess(res.data));
    } catch (error) {
      return dispatch(authError(error));
    }
  };
};
