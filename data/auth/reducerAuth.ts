import { AUTH_ERROR, AUTH_LOADING, AUTH_SUCCESS, LOGIN } from "./actionAuth";

const initialState = {
  user: null,
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
    case AUTH_SUCCESS:
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
        isErrror: true,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};
