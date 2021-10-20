import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import ReactDOM from "react-dom";
import "./Css/index.css";
import TaskOverview from "./Pages/TaskOverview";

ReactDOM.render(
  <React.StrictMode>
    <TaskOverview />
  </React.StrictMode>,
  document.getElementById("root")
);
