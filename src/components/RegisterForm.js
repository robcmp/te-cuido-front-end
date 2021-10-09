import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
//aqui comienza todo el formulario

const RegisterForm = () => {
  const formSchema = Yup.object().shape({
    Name: Yup.string()
      .min(5, `min 5 char`)
      .max(25, `max 25 char`)
      .required("field required"),
    LastName: Yup.string()
      .min(5, `min 5 char`)
      .max(25, `max 25 char`)
      .required("field required"),
    UserName: Yup.string()
      .min(5, `min 5 char`)
      .max(25, `max 25 char`)
      .required("field required"),
    Email: Yup.string()
      .required("field required")
      .email("Correo Electronico invalido")
      .max(255, `max 255 char`),
    password: Yup.string().required("field required").min(5, `min 5 char`),
    RepeatPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("repeat password is required")
      .required("field required")
      .min(5, `min 5 char`),

    ID: Yup.number().required("field required").min(8, `min  8 char`),
  });
  //aqui empieza la estructura
  return (
    <>
      <Formik
        initialValues={{
          Name: "",
          LastName: "",
          UserName: "",
          Password: "",
          RepeatPassword: "",
          Email: "",
          MobilePhone: "",
        }}
        validationSchema={formSchema}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <div className="container">
            <div className="row">
              <div className="col">
                <div>
                  <label htmlFor="Name">Nombres:</label>
                  <Field
                    className="form-control"
                    name="Name"
                    placeholder=""
                    type="text"
                  />
                  <ErrorMessage
                    name="Name"
                    component="div"
                    className="field-error text-danger"
                  />
                </div>

                <div>
                  <label htmlFor="LastName">Apellidos:</label>
                  <Field
                    className="form-control"
                    name="LastName"
                    placeholder=""
                    type="text"
                  />
                  <ErrorMessage
                    name="LastName"
                    component="div"
                    className="field-error text-danger"
                  />
                </div>

                <div>
                  <label htmlFor="UserName">Usuario:</label>
                  <Field
                    className="form-control"
                    name="UserName"
                    placeholder=""
                    type="text"
                  />
                  <ErrorMessage
                    name="UserName"
                    component="div"
                    className="field-error text-danger"
                  />
                </div>
                <div>
                  <label htmlFor="Email">Correo:</label>
                  <Field
                    className="form-control"
                    name="Email"
                    placeholder=""
                    type="email"
                  />
                  <ErrorMessage
                    name="Email"
                    component="div"
                    className="field-error text-danger"
                  />
                </div>
                <div>
                  <label htmlFor="Password">Contraseña:</label>
                  <Field
                    className="form-control"
                    name="Password"
                    placeholder=""
                    type="password"
                  />
                  <ErrorMessage
                    name="Password"
                    component="div"
                    className="field-error text-danger"
                  />
                </div>
                <div>
                  <label htmlFor="RepeatPassword">Repetir contraseña:</label>
                  <Field
                    className="form-control"
                    name="RepeatPassword"
                    placeholder=""
                    type="password"
                  />
                  <ErrorMessage
                    name="reppassword"
                    component="div"
                    className="field-error text-danger"
                  />
                </div>
                <div>
                  <label htmlFor="ID">RUT:</label>
                  <Field
                    className="form-control"
                    name="ID"
                    placeholder=""
                    type="string"
                  />
                  <ErrorMessage
                    name="ID"
                    component="div"
                    className="field-error text-danger"
                  />
                </div>
              </div>
              <div className="col">
                <img
                  src="https://images.unsplash.com/photo-1422015347944-9dd46d16bd0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGVsZGVybHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default RegisterForm;
