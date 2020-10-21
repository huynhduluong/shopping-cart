import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/jquery/dist/jquery.min";
import "./../node_modules/bootstrap/dist/js/bootstrap.min";
import "./../node_modules/popper.js/dist/umd/popper.min";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>
  document.getElementById("root")
);

serviceWorker.unregister();
