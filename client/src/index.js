import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Map from "./App";
ReactDOM.render(
  <React.StrictMode>
    <div id="background-map">
      <Map />
    </div>
    <div id="foreground-data"></div>
  </React.StrictMode>,
  document.getElementById("root")
);
