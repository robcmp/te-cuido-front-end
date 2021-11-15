import { Component } from "react";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ component: Component, ...otherProps }) => {
  const isAuth = localStorage.getItem("isAuth");
  const localStg = JSON.parse(localStorage.getItem("loginUser"));
  const isClient = localStg.user.role;

  return (
    <Route
      {...otherProps}
      render={(props) =>
        isAuth && isClient === 3 ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
export default PrivateRoute;
