import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";

const Login = (props) => {
  /* const history = useHistory(); */
  const loginStyle = {
    margin: "32px auto 37px",
    maxWidth: "530px",
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)",
  };
  const { touched, errors } = props;
  return (
    <React.Fragment>
      <div className="container">
        <div className="login-wrapper" style={loginStyle}>
          <div className="d-flex">
            <h2 className="mx-auto">Bienvenido</h2>
          </div>
          <Form className="form-container">
            <div className="form-group mt-2">
              <label htmlFor="email">Correo</label>
              <Field
                type="text"
                name="email"
                className={"form-control"}
                placeholder="Correo"
              />
              {touched.email && errors.email && (
                <span className="help-block text-danger">{errors.email}</span>
              )}
            </div>
            <div className="form-group mt-3">
              <label htmlFor="password">Contraseña</label>
              <Field
                type="password"
                name="password"
                className={"form-control"}
                placeholder="Contraseña"
              />
              {touched.password && errors.password && (
                <span className="help-block text-danger">
                  {errors.password}
                </span>
              )}
            </div>
            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-primary btn-large fw-bold mt-4"
              >
                Iniciar Sesión
              </button>
            </div>
            <div className="row mt-4">
              <div className="col-md-8 fw-bold">¿Olvidaste tu contraseña?</div>
              <div className="col-md-4 fw-bold">
                <Link
                  to="/Register"
                  className="btn btn-warning fw-bold"
                  type="button"
                >
                  Registrarse
                </Link>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
};

const LoginFormik = withFormik({
  mapPropsToValues: (props) => {
    return {
      email: props.email || "",
      password: props.password || "",
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email("Email not valid").required("Email is required"),
    password: Yup.string().required("Password is required"),
  }),

  handleSubmit: (values) => {
    const REST_API_URL = "http://localhost:5000/login";
    fetch(REST_API_URL, {
      method: "post",
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.ok) {
          /* history.push('/User') */
          return response.json();
        } else {
          // HANDLE ERROR
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        // HANDLE RESPONSE DATA
        console.log(data);
      })
      .catch((error) => {
        // HANDLE ERROR
        console.log(error);
      });
  },
})(Login);

export default LoginFormik;
