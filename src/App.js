import React from "react";
import "./App.css";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Experience from "./Experience";

import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
