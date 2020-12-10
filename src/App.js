import React from "react";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Experience from "./Experience";

import Main from "./Main";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
