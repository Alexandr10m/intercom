import * as React from "react";
import * as ReactDom from "react-dom";
import App from "./components/app/app";
import "./style.scss";


ReactDom.render(
  <App/>, document.querySelector(`#root`)
)
