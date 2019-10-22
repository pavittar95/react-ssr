import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../container/Home";
import About from "../container/About";
import Contact from "../container/Contact";
import Header from "../components/Header";
export default function Routes() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={props => (
          <>
            <Header />
            <Home {...props} />
          </>
        )}
      />
      <Route
        exact
        path="/about"
        render={props => (
          <>
            <Header />
            <About {...props} />
          </>
        )}
      />
      <Route
        exact
        path="/contact"
        render={props => (
          <>
            <Header />
            <Contact {...props} />
          </>
        )}
      />
    </Switch>
  );
}
