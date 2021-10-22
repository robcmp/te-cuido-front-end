import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "../views/Home";
import Navbar from "./Navbar";
import Login from "../views/Login";
import Register from "./RegisterForm";
import User from "../views/User";
import Admin from "../views/Admin";

const Layout = () => {
  return (
    <Router>
      <Navbar />
      <div className="container-fluid">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/user">
            <User />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route render={() => <h1>Not found</h1>}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Layout;
