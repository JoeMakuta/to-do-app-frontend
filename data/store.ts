import { combineReducers, createStore, applyMiddleware } from "redux";
import { authReducer } from "./auth/reducerAuth";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { tasksReducer } from "./tasks/tasksReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  tasks: tasksReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
