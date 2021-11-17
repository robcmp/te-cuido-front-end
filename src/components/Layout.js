import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "../views/Home";
import Navbar from "./Navbar";
import Login from "../views/Login";
import Register from "./RegisterForm";
import User from "../views/User";
import Admin from "../views/Admin";
import PrivateRouteClient from "./PrivateRouteClient";
import Profile from "./Profile";
import Service from "../views/Service";
import ListPublications from "../views/ListPublications";
import ServiceHistory from "../views/ServiceHistory";
import ServiceConfirmation from "../views/ServiceConfirmation";
import ClientReservation from "../views/ClientReservations";
import PrivateRouteCarer from "./PrivateRouteCarer";

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

          {/* <Route exact path="/admin">
            <Admin />
          </Route> */}

          {/*------------------- Routes for Client(Elderlies) in the app--------------------------*/}
          <PrivateRouteClient exact path="/user" component={() => <User />} />
          <PrivateRouteClient
            exact
            path="/user/profile"
            component={() => <Profile />}
          />
          <PrivateRouteClient
            exact
            path="/user/list_publication"
            component={() => <ListPublications />}
          />
          <PrivateRouteClient
            exact
            path="/user/client_reservation"
            component={() => <ClientReservation />}
          />

          {/*------------------End Routes for Client(Elderlies) in the app---------------------------*/}

          {/*---------------------------Routes for Client(Carer) in the app---------------------------*/}
          <PrivateRouteCarer exact path="/carer" component={() => <User />} />
          <PrivateRouteCarer
            exact
            path="/carer/profile"
            component={() => <Profile />}
          />
          <PrivateRouteCarer
            exact
            path="/carer/service_publication"
            component={() => <Service />}
          />
          <PrivateRouteCarer
            exact
            path="/carer/service_history"
            component={() => <ServiceHistory />}
          />
          <PrivateRouteCarer
            exact
            path="/carer/service_confirmation"
            component={() => <ServiceConfirmation />}
          />

          {/*---------------------------End Routes for Client(Carer) in the app---------------------------*/}

          <Route render={() => <h1>Not found</h1>}></Route>
        </Switch>
      </div>
    </Router>
  );
};
export default Layout;
