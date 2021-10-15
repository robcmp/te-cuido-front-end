import React from "react";
import _ from "lodash";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import InputMask from "react-input-mask";

const rutRegex = "^([0-9]+-[0-9Kk])$";

const phoneChile = "/^(+?56)?(s?)(0?9)(s?)[9876543]d{7}$/";
const RegisterForm = (props) => {
  const history = useHistory();
  const formSchema = Yup.object().shape({
    photo: Yup.string().oneOf([Yup.ref("photo")]),
    name: Yup.string()
      .max(30, `maximo 30 caracteres`)
      .required("Campo requerido"),
    last_name: Yup.string()
      .max(30, `maximo 30 caracteres`)
      .required("Campo requerido"),
    email: Yup.string()
      .required("Campo requerido")
      .email("Correo Electronico invalido")
      .max(30, `maximo 30 caracteres`),
    password: Yup.string()
      .required("Por favor ingrese su contrase;a")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "La contrase;a debe contener por lo menos 8 caracteres, uno en Mayuscula, un numero y un caracter especial"
      ),
    confirmPassword: Yup.string()
      .required("Por favor confirme su contrase;a")
      .oneOf([Yup.ref("password")], "Las claves deben coincidir"),
    number_id: Yup.string()
      .required("Campo requerido")
      .matches(rutRegex, "RUT invalido"),
    id_photo: Yup.string()
      .oneOf([Yup.ref("id_photo")])
      .required("Foto requerida"),
    country: Yup.string().required("Campo requerido"),
    city: Yup.string()
      .required("Campo requerido")
      .matches(phoneChile, "Numero de telefono debe empezar +56"),
    phone: Yup.string().required("Campo requerido"),
    occupation: Yup.string().required("Campo requerido"),
    vaccinated: Yup.bool().oneOf([true], "Estar vacunado es requerido"),
    user_type: Yup.bool(),
  });

  return (
    <Formik
      initialValues={{
        photo: "",
        name: "",
        last_name: "",
        email: "",
        password: "",
        confirmPassword: "",
        number_id: "",
        id_photo: "",
        country: "",
        city: "",
        phone: "",
        occupation: "",
        vaccinated: false,
        user_type: false,
      }}
      validationSchema={formSchema}
      onSubmit={(values, { resetForm }) => {
        let values2 = _.omit(values, "confirmPassword", "id_photo", "photo");
        console.log(values2);
        const REST_API_URL = "http://localhost:5000/user";
        fetch(REST_API_URL, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values2),
        })
          .then((response) => {
            if (response.ok) {
              Swal.fire("Registro exitoso", "", "success");
              resetForm({ values: "" });
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
        console.log(JSON.stringify(values));
      }}
    >
      {(formsProps) => (
        <Form>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="photo">Foto de Perfil:</label>
                  <input
                    name="photo"
                    type="file"
                    onChange={(event) => {
                      formsProps.setFieldValue("photo", event.target.files[0]);
                    }}
                  />
                  <ErrorMessage
                    name="photo"
                    component="div"
                    className="field-error text-danger"
                  />
                </div>
                <div>
                  <label htmlFor="name">Nombres:</label>
                  <Field
                    className="form-control"
                    name="name"
                    placeholder=""
                    type="text"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="field-error text-danger"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="last_name">Apellidos:</label>
                  <Field
                    className="form-control"
                    name="last_name"
                    placeholder=""
                    type="text"
                  />
                  <ErrorMessage
                    name="last_name"
                    component="div"
                    className="field-error text-danger"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo:</label>
                  <Field
                    className="form-control"
                    name="email"
                    placeholder=""
                    type="email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="field-error text-danger"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Contraseña:</label>
                  <Field
                    className="form-control"
                    name="password"
                    placeholder=""
                    type="password"
                  />
                  <ErrorMessage
                    name="password"
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
                  <label htmlFor="number_id">DNI:</label>
                  <Field
                    className="form-control"
                    name="number_id"
                    placeholder=""
                    type="string"
                  />
                  <ErrorMessage
                    name="number_id"
                    component="div"
                    className="field-error text-danger"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="id_photo">DNI foto:</label>
                  <Field
                    className="form-control"
                    name="id_photo"
                    type="file"
                    accept="image/*"
                  />
                  <ErrorMessage
                    name="id_photo"
                    component="div"
                    className="field-error text-danger"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="country">Pais:</label>
                  <Field
                    className="form-control"
                    name="country"
                    placeholder=""
                    type="string"
                  />
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="field-error text-danger"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city">Ciudad:</label>
                  <Field
                    className="form-control"
                    name="city"
                    placeholder=""
                    type="string"
                  />
                  <ErrorMessage
                    name="city"
                    component="div"
                    className="field-error text-danger"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telefono:</label>
                  <Field
                    className="form-control"
                    name="phone"
                    placeholder=""
                    type="string"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="field-error text-danger"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Occupation">Ocupacion:</label>
                  <Field
                    className="form-control"
                    name="occupation"
                    placeholder=""
                    type="string"
                  />
                  <ErrorMessage
                    name="occupation"
                    component="div"
                    className="field-error text-danger"
                  />
                </div>
                <div>
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
                <div>
                  <Field
                    type="checkbox"
                    name="user_type"
                    className="form-check-input"
                  />
                  <label htmlFor="user_type" className="form-check-label">
                    Cuidador
                  </label>

                  <ErrorMessage
                    name="user_type"
                    component="div"
                    className="invalid-feedback"
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
            <div className="row">
              <div className="col-md-6">
                <button type="submit" className="btn btn-primary fw-bold mt-4">
                  Registrarse
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
