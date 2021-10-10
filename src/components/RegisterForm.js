import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { object, string, ref, number, bool } from "yup";
//aqui comienza todo el formulario

const rutRegex = "^([0-9]+-[0-9Kk])$";

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

    ID: string().required("Campo requerido").matches(rutRegex, "RUT invalido"),
    IDphoto: string().required("Campo requerido"),
    Country: string().required("Campo requerido"),
    City: string().required("Campo requerido"),
    Phone: string().required("Campo requerido"),
    Occupation: string().required("Campo requerido"),
    vaccinated: bool().oneOf([true], "Estar vacunado es requerido"),
  });
  //aqui empieza la estructura
  return (
    <Formik
      initialValues={{
        Name: "",
        LastName: "",
        UserName: "",
        Email: "",
        Password: "",
        confirmPassword: "",
        ID: "",
        IDphoto: "",
        Country: "",
        City: "",
        Phone: "",
        Occupation: "",
        vaccinated: false,
      }}
      validationSchema={formSchema}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div>
                <div className="form-group">
                  <label htmlFor="ProfilePhoto">Foto de Perfil:</label>
                  <input
                    name="avatar"
                    accept="image/*"
                    id="contained-button-file"
                    type="file"
                  />
                  <ErrorMessage
                    name="ProfilePhoto"
                    component="div"
                    className="field-error text-danger"
                  />
                </div>
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
                <label htmlFor="ID">DNI:</label>
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
              <div className="form-group">
                <label htmlFor="IDphoto">DNI foto:</label>
                <Field
                  className="form-control"
                  name="IDphoto"
                  placeholder=""
                  type="string"
                />
                <ErrorMessage
                  name="IDphoto"
                  component="div"
                  className="field-error text-danger"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Country">Pais:</label>
                <Field
                  className="form-control"
                  name="Country"
                  placeholder=""
                  type="string"
                />
                <ErrorMessage
                  name="Country"
                  component="div"
                  className="field-error text-danger"
                />
              </div>
              <div className="form-group">
                <label htmlFor="City">Ciudad:</label>
                <Field
                  className="form-control"
                  name="City"
                  placeholder=""
                  type="string"
                />
                <ErrorMessage
                  name="City"
                  component="div"
                  className="field-error text-danger"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Phone">Telefono:</label>
                <Field
                  className="form-control"
                  name="Phone"
                  placeholder=""
                  type="string"
                />
                <ErrorMessage
                  name="Phone"
                  component="div"
                  className="field-error text-danger"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Occupation">Ocupacion:</label>
                <Field
                  className="form-control"
                  name="Occupation"
                  placeholder=""
                  type="string"
                />
                <ErrorMessage
                  name="Occupation"
                  component="div"
                  className="field-error text-danger"
                />
              </div>
              <Field
                type="checkbox"
                name="vaccinated"
                className="form-check-input"
              />
              <label htmlFor="vaccinated" className="form-check-label">
                Vacunado
              </label>
              <ErrorMessage
                name="vaccinated"
                component="div"
                className="invalid-feedback"
              />
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
