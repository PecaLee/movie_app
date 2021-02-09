import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./routes/About";
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true}>
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </HashRouter>
  );
}

export default App;
