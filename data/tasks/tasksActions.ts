import axios from "axios";
import { iTask } from "../../types/task";

// action types
export const TASKS_ADD_LOADING = "TASKS_LOADING";
export const TASKS_GET_LOADING = "TASKS_LOADING";
export const TASKS_DELETE_LOADING = "TASKS_LOADING";
export const TASKS_ADD_SUCCESS = "TASKS_ADD_SUCCESS";
export const TASKS_GET_SUCCESS = "TASKS_GET_SUCCESS";
export const TASKS_GET_ONE_SUCCESS = "TASKS_GET_ONE_SUCCESS";
export const TASKS_DELETE_SUCCESS = "TASKS_DELETE_SUCCESS";
export const TASKS_UPDATE_SUCCESS = "TASKS_UPDATE_SUCCESS";
export const TASKS_ERROR = "TASKS_ERROR";

//  api config
const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_URI;

const addTasksLoading = () => ({
  type: TASKS_ADD_LOADING,
});

const deleteTasksLoading = () => ({
  type: TASKS_DELETE_LOADING,
});

const getTasksLoading = () => ({
  type: TASKS_GET_LOADING,
});

const addTasksSuccess = (task: any) => ({
  type: TASKS_ADD_SUCCESS,
  payload: task,
});

const getTasksSuccess = (tasks: any) => ({
  type: TASKS_GET_SUCCESS,
  payload: tasks,
});

const getOneTaskSuccess = (task: any) => ({
  type: TASKS_GET_ONE_SUCCESS,
  payload: task,
});

const deleteTasksSuccess = (task: any) => ({
  type: TASKS_DELETE_SUCCESS,
  payload: task,
});

const updateTaskSuccess = (task: any) => ({
  type: TASKS_UPDATE_SUCCESS,
  payload: task,
});
const tasksError = (error: any, typeError: string) => ({
  type: TASKS_ERROR,
  payload: {
    error,
    typeError,
  },
});

export const getTasks = () => {
  return async (dispatch: any) => {
    dispatch(getTasksLoading());
    try {
      const res = await axios.get(`${BACKEND_API}/getTask`);
      dispatch(getTasksSuccess(res.data));
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return dispatch(tasksError(message, "GET_ERROR"));
    }
  };
};

export const getOneTask = (id: string) => {
  return async (dispatch: any) => {
    dispatch(getTasksLoading());
    try {
      const res = await axios.get(`${BACKEND_API}/getSingleTask/${id}`);
      dispatch(getOneTaskSuccess(res.data));
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return dispatch(tasksError(message, "GET_ONE_ERROR"));
    }
  };
};

export const addTasks = (task: iTask) => {
  return async (dispatch: any) => {
    dispatch(addTasksLoading());
    try {
      const res = await axios.post(`${BACKEND_API}/createTask`, task);
      dispatch(addTasksSuccess(res.data));
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return dispatch(tasksError(message, "ADD_ERROR"));
    }
  };
};

export const updateTask = (id: string, task: iTask) => {
  return async (dispatch: any) => {
    dispatch(addTasksLoading());
    try {
      const res = await axios.put(`${BACKEND_API}/updateTask/${id}`, task);
      dispatch(updateTaskSuccess(res.data));
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return dispatch(tasksError(message, "UPDATE_ONE_ERROR"));
    }
  };
};

export const deleteTask = (id: string) => {
  return async (dispatch: any) => {
    dispatch(deleteTasksLoading());
    try {
      const res = await axios.delete(`${BACKEND_API}/deleteTask/${id}`);
      dispatch(deleteTasksSuccess(res.data));
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return dispatch(tasksError(message, "DELETE_ERROR"));
    }
  };
};
