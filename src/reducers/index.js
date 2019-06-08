import { combineReducers } from "redux";
import todos from "./todos";
import * as fromTodo from "./todos";

const todoApp = combineReducers({ todos });

export default todoApp;

// Exposes only relevant piece of state to selector function 'fromTodo.getVisibleTodos'.
export const getVisibleTodos = (state, filter) =>
  fromTodo.getVisibleTodos(state.todos, filter);
