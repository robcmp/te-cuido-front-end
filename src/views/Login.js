import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Form, Field, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const Login = (props) => {
  const { store, actions } = useContext(Context);
  const history = useHistory();
  const saveUserInfo = (profileUser) => {
    localStorage.setItem("loginUser", JSON.stringify(profileUser));
  };
  const loginStyle = {
    margin: "32px auto 37px",
    maxWidth: "530px",
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)",
  };
  const formSchema = Yup.object().shape({
    email: Yup.string()
      .email("Correo no valido")
      .required("Correo es requerido"),
    password: Yup.string().required("Contraseña es requerida"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={formSchema}
      onSubmit={(values) => {
        const REST_API_URL = "http://localhost:5000/login";
        fetch(REST_API_URL, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })
          .then((response) => {
            if (response.ok) {
              history.push("/User");
              return response.json();
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Usuario o contraseña invalida",
              });
              // HANDLE ERROR
              throw new Error("Something went wrong");
            }
          })
          .then((data) => {
            saveUserInfo(data);
            actions.setProfile(data);
            // console.log(store);
            // HANDLE RESPONSE DATA
            // console.log(data);
          })
          .catch((error) => {
            // HANDLE ERROR
            console.log(error);
          });
      }}
    >
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
              <ErrorMessage
                name="email"
                component="div"
                className="help-block text-danger"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="password">Contraseña</label>
              <Field
                type="password"
                name="password"
                className={"form-control"}
                placeholder="Contraseña"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="help-block text-danger"
              />
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
    </Formik>
  );
};

export default Login;
