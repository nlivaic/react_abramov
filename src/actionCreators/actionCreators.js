import * as api from "../api";
import { getIsFetching } from "../reducers";
import { normalize } from "normalizr";
import * as schema from "./schema";

// Thunk action creator.
export const fetchData = filter => (dispatch, state) => {
  if (getIsFetching(state(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: "FETCH_TODOS_REQUEST",
    filter
  });

  return api.fetchTodos(filter).then(
    response => {
      dispatch({
        type: "FETCH_TODOS_SUCCESS",
        filter,
        response: normalize(response, schema.arrayOfTodos)
      });
    },
    error => {
      dispatch({
        type: "FETCH_TODOS_FAILURE",
        filter,
        errorMessage: error.message
      });
    }
  );
};

export const inputTask = text => dispatch => {
  return api.addTodos(text).then(response => {
    dispatch({
      type: "ADD_TODO_SUCCESS",
      response: normalize(response, schema.todo)
    });
  });
};

export const toggleTodo = id => dispatch => {
  return api.toggleTodo(id).then(response => {
    console.log(normalize(response, schema.todo));
    dispatch({
      type: "TOGGLE_TODO_SUCCESS",
      response: normalize(response, schema.todo)
    });
  });
};
