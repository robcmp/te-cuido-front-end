import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "../views/Home";
import Navbar from "./Navbar";
import Login from "../views/Login";
import Register from "./RegisterForm";
<<<<<<< HEAD
import injectContext from "../store/appContext";
=======
import User from "../views/User";
>>>>>>> fd610b5dba7fcacc9fa15401105ef0cb36147b21

const Layout = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/User">
            <User />
          </Route>
          <Route exact path="/Register">
            <Register />
          </Route>
          <Route render={() => <h1>Not found</h1>}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Layout;
