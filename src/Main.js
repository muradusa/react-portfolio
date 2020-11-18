import React from "react";
import Home from "./Home";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <div className="main__left">
        <p>This is very social media will be</p>
      </div>
      <div className="main__center">
        <Home />
      </div>
      <div className="main__right">this is the right side</div>
    </div>
  );
}

export default Main;
