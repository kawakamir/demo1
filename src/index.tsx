import * as React from "react";
import * as ReactDOM from "react-dom";
import Img from "./logo.png";
import "./reset.css";

ReactDOM.render(
  <div>
    hello world. <img src={Img}></img>
  </div>,
  document.getElementById("root")
);
