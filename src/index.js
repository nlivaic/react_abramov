// index.js has no mention of reducers, store subscriptions, redux.
// It has all been moved into standalone files and components (configureStore.js and <Root />)
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/configureStore";
import Root from "./components/Root";

const store = configureStore();

const render = () => {
  ReactDOM.render(<Root store={store} />, document.getElementById("root"));
};

store.subscribe(render);
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
