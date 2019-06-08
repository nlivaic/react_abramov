import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import logger from "redux-logger";
import todoApp from "../reducers";

// Takes care of reducers and subscriptions.
const configureStore = () => {
  const middlewares = [];
  // In order in which the dispatch call traverses middlewares.
  middlewares.push(promiseMiddleware);
  middlewares.push(logger);
  const store = createStore(todoApp, applyMiddleware(...middlewares));
  return store;
};

export default configureStore;
