import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { object, string, ref, number } from "yup";
//aqui comienza todo el formulario

const RegisterForm = () => {
  const formSchema = object().shape({
    Name: string()
      .min(4, `minimo 4 caracteres`)
      .max(30, `maximo 30 caracteres`)
      .required("Campo requerido"),
    LastName: string()
      .min(5, `minimo 5 caracteres`)
      .max(30, `maximo 30 caracteres`)
      .required("Campo requerido"),
    Email: string()
      .required("Campo requerido")
      .email("Correo Electronico invalido")
      .max(30, `maximo 30 caracteres`),
    password: string()
      .required("Por favor ingrese su contrase;a")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "La contrase;a debe contener por lo menso 8 caracteres, uno en Mayuscula, un numero y un caracter especial"
      ),
    confirmPassword: string()
      .required("Por favor confirme su contrase;a")
      .oneOf([ref("Password")], "Las claves no coinciden"),

    ID: number().required("Campo requerido").min(8, `min  8 char`),
  });
  //aqui empieza la estructura
  return (
    <Formik
      initialValues={{
        Name: "",
        LastName: "",
        UserName: "",
        Password: "",
        confirmPassword: "",
        Email: "",
        MobilePhone: "",
      }}
      validationSchema={formSchema}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
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

              <div className="form-group">
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
              <div className="form-group">
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
              <div className="form-group">
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
              <div className="form-group">
                <label htmlFor="confirmPassword">Repetir contraseña:</label>
                <Field
                  className="form-control"
                  name="confirmPassword"
                  placeholder=""
                  type="password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="field-error text-danger"
                />
              </div>
              <div className="form-group">
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
            <div className="col-md-4">
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1422015347944-9dd46d16bd0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGVsZGVybHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
