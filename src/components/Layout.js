import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "../views/Home";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route render={() => <h1>Not found</h1>}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Layout;
