import { combineReducers } from "redux";
import byId, * as fromIds from "./byId";
import createFilterList, * as fromFilterList from "./createFilterList";

// Combined reducer.
const listFilterIds = combineReducers({
  all: createFilterList("all"),
  active: createFilterList("active"),
  completed: createFilterList("completed")
});

const todos = combineReducers({ byId, listFilterIds });

export default todos;

// Top-level selector.
export const getVisibleTodos = (state, filter) => {
  return fromFilterList
    .getIds(state.listFilterIds[filter])
    .map(id => fromIds.getTodo(state.byId, id));
};

// Top-level selector.
export const getIsFetching = (state, filter) => {
  return fromFilterList.getIsFetching(state.listFilterIds[filter]);
};

// Top-level selector.
export const getErrorMessage = (state, filter) => {
  return fromFilterList.getErrorMessage(state.listFilterIds[filter]);
};
