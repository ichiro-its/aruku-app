/* eslint no-unused-vars: ["error", { "args": "none" }] */
import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Walk from "./WalkSettings";
import Init from "./InitSettings";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Walk} />
        <Route path="/Init" component={Init} />
      </Switch>
    </Router>
  );
}

export default App;
