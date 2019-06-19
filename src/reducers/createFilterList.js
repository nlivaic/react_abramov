import { combineReducers } from "redux";

const createFilterList = filter => {
  const ids = (state = [], action) => {
    switch (action.type) {
      case "FETCH_TODOS_SUCCESS":
        return action.filter === filter ? action.response.result : state;
      case "ADD_TODO_SUCCESS":
        return filter !== "completed"
          ? [...state, action.response.result]
          : state;
      case "TOGGLE_TODO_SUCCESS":
        const { result: toggleId, entities } = action.response;
        const { todos } = entities;
        if (
          (filter === "active" && todos[toggleId].completed) ||
          (filter === "completed" && !todos[toggleId].completed)
        ) {
          return state.filter(todoId => todoId !== toggleId);
        }
        return state;
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    if (action.filter !== filter) return state;
    switch (action.type) {
      case "FETCH_TODOS_REQUEST":
        return true;
      case "FETCH_TODOS_SUCCESS":
      case "FETCH_TODOS_FAILURE":
        return false;
      default:
        return state;
    }
  };

  const errorMessage = (state = null, action) => {
    if (action.filter !== filter) return state;
    switch (action.type) {
      case "FETCH_TODOS_FAILURE":
        return action.errorMessage;
      default:
        return state;
    }
  };
  return combineReducers({ ids, isFetching, errorMessage });
};

export default createFilterList;

// Combined state selector.
export const getIds = state => state.ids;

// Combined state selector.
export const getIsFetching = state => state.isFetching;

// Combined state selector.
export const getErrorMessage = state => state.errorMessage;
