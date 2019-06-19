import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import todoApp from "../reducers";

// Takes care of reducers and subscriptions.
const configureStore = () => {
  // In order in which the dispatch call traverses middlewares.
  const middlewares = [thunk];
  middlewares.push(logger);
  const store = createStore(todoApp, applyMiddleware(...middlewares));
  return store;
};

export default configureStore;
