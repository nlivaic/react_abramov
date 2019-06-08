import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import TaskApp from "./TaskApp";

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/:filter?" component={TaskApp} />
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
