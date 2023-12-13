
// import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";

import 'bootstrap/dist/css/bootstrap.min.css';
// function emitComment (id){
//     setInterval(() => {
//       window.dispatchEvent(
//         new CustomEvent(`lesson-${id}`,{
//           detail:`Nội dung comment của lesson-${id}`
//         })
//       )
//     }, 2000);
// }
// emitComment(1)
// emitComment(2)
// emitComment(3)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
