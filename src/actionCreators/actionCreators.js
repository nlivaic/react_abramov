import uuid from "uuid/v4";
import { fetchTodos } from "../api";

const receiveTodos = (filter, response) => ({
  type: "RECEIVE_TODOS",
  filter,
  response
});

export const fetchData = filter =>
  fetchTodos(filter).then(data => receiveTodos(filter, data));

export const inputTask = text => ({
  type: "ADD_TODO",
  id: uuid(),
  text
});

export const toggleTodo = id => ({ type: "TOGGLE_TODO", id });
