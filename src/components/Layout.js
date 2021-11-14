import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "../views/Home";
import Navbar from "./Navbar";
import Login from "../views/Login";
import Register from "./RegisterForm";
import User from "../views/User";
import Admin from "../views/Admin";
import PrivateRoute from "./PrivateRoute";
import Profile from "./Profile";
import Service from "../views/Service";
import ListPublications from "../views/ListPublications";
import ServiceHistory from "../views/ServiceHistory";
import ServiceConfirmation from "../views/ServiceConfirmation";
import ClientReservation from "../views/ClientReservations";

const Layout = () => {
  return (
    <Router>
      <Navbar />
      <div className="container-fluid">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/*---------------------------Routes for everyone in the app---------------------------*/}
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          {/*---------------------------End Routes for everyone in the app---------------------------*/}

          <Route exact path="/admin">
            <Admin />
          </Route>

          <PrivateRoute exact path="/user" component={() => <User />} />
          <PrivateRoute
            exact
            path="/user/profile"
            component={() => <Profile />}
          />
          {/*------------------- Routes for Client(Elderlies) in the app--------------------------*/}
          <Route exact path="/user/list_publication">
            <ListPublications />
          </Route>
          <Route exact path="/user/client_reservation">
            <ClientReservation />
          </Route>
          {/*------------------End Routes for Client(Elderlies) in the app---------------------------*/}

          {/*---------------------------Routes for Client(Carer) in the app---------------------------*/}
          <Route exact path="/user/service_publication">
            <Service />
          </Route>
          <Route exact path="/user/service_history">
            <ServiceHistory />
          </Route>
          <Route exact path="/user/service_confirmation">
            <ServiceConfirmation />
          </Route>
          {/*---------------------------End Routes for Client(Carer) in the app---------------------------*/}

          <Route render={() => <h1>Not found</h1>}></Route>
        </Switch>
      </div>
    </Router>
  );
};
export default Layout;
