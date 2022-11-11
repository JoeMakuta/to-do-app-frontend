import { iTask, iTasks } from "../../types/task";
import {
  TASKS_ADD_LOADING,
  TASKS_GET_LOADING,
  TASKS_DELETE_LOADING,
  TASKS_ADD_SUCCESS,
  TASKS_GET_SUCCESS,
  TASKS_DELETE_SUCCESS,
  TASKS_UPDATE_SUCCESS,
  TASKS_ERROR,
  TASKS_GET_ONE_SUCCESS,
} from "./tasksActions";

const initialState: iTasks = {
  tasks: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  typeError: "NONE",
  errorMessage: "",
};

export const tasksReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TASKS_ADD_LOADING:
    case TASKS_GET_LOADING:
    case TASKS_DELETE_LOADING:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        typeError: "NONE",
        tasks: [],
      };
    case TASKS_ADD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        typeError: "NONE",
        tasks: [...state.tasks, action.payload.data],
      };
    case TASKS_GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        typeError: "NONE",
        tasks: action.payload.Task,
      };

    case TASKS_GET_ONE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        typeError: "NONE",
        tasks: action.payload,
      };

    case TASKS_DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        typeError: "NONE",
        tasks: state.tasks.filter(
          (el: iTask) => el._id !== action.payload.data._id
        ),
      };

    case TASKS_UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        typeError: "NONE",
        tasks: state.tasks.map((el) =>
          el._id?.toString() === action.payload.data._id.toString()
            ? action.payload.data
            : el
        ),
      };

    case TASKS_ERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        typeError: action.payload.typeError,
        errorMessage: action.payload.error,
      };

    default:
      return state;
  }
};
