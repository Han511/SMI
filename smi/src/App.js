import React from "react";

import {
  Footer,
  Blog,
  WorkOnYou,
  Solution,
  WhatSMI,
  Header,
} from "./containers";
import { CTA, Question, Navbar } from "./components";

import "./App.css";

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Question />
    <WhatSMI />
    <Solution />
    <WorkOnYou />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;
