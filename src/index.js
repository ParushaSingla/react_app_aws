import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/store";
import { ToastProvider } from "react-toast-notifications";
ReactDOM.render(
  <Provider store={store}>
    <ToastProvider>
      <Router>
        <App />
      </Router>
    </ToastProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
