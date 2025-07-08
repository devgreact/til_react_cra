import React from "react";
import ReactDOM from "react-dom/client";
// css
import "./index.css";
import StartPage from "./pages/StartPage";
import Posts from "./pages/Posts";
import Albums from "./pages/Albums";
import Test from "./pages/Test";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="wrap">
    <Test></Test>
  </div>,
);
