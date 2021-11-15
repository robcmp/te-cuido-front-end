import { Component } from "react";
import { Route, Redirect } from "react-router-dom";
const PrivateRouteCarer = ({ component: Component, ...otherProps }) => {
  const isAuth = localStorage.getItem("isAuth");
  const localStg = JSON.parse(localStorage.getItem("loginUser"));
  const isCarer = localStg.user.role;

  return (
    <Route
      {...otherProps}
      render={(props) =>
        isAuth && isCarer === 2 ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
export default PrivateRouteCarer;
