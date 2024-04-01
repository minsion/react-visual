import "./polyfills.js";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const UI_ROOT_ID = "datav-ui-root";
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: import 'mock'
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
import { mockXHR } from "./__mocks__";

if (process.env.REACT_APP_USE_MOCK) {
  mockXHR();
  console.log("current mode is development, mock is enabled");
}

ReactDOM.render(<App />, document.getElementById(UI_ROOT_ID));
