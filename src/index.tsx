import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./store/store";

import { Provider } from "react-redux";

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
