import {
  AUTH_ERROR,
  AUTH_LOADING,
  AUTH_LOGIN_SUCCESS,
  AUTH_SIGNUP_SUCCESS,
} from "./actionAuth";

let user;
if (typeof window !== "undefined") {
  if (localStorage.getItem("cres-todo-user")) {
    user = JSON.parse(localStorage.getItem("cres-todo-user")!);
  } else {
    user = null;
  }
}

const initialState = {
  user: user || "vb",
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        user: null,
      };
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        user: action.payload,
      };
    case AUTH_SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        user: action.payload,
      };
    case AUTH_ERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};
