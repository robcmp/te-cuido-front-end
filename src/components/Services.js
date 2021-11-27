import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Formik, Field, Form, ErrorMessage } from "formik";
import _ from "lodash";
import * as Yup from "yup";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import Swal from "sweetalert2";

const Services = () => {
  const { store } = useContext(Context);
  const [date, setDate] = useState([new Date(), new Date()]);
  const formSchema = Yup.object().shape({
    age_start: Yup.number().required("Campo requerido"),
    age_end: Yup.number().required("Campo requerido"),
    notes: Yup.string(),
    price: Yup.number().required("Campo requerido"),
  });
  return (
    <div className="container">
      <Formik
        initialValues={{
          gender: "",
          age_start: "",
          age_end: "",
          notes: "",
          date: date,
          price: "",
        }}
        validationSchema={formSchema}
        onSubmit={(values, { resetForm }) => {
          let values2 = values;

          //Adding new keys and properties to the object values 2
          values2.date_start = date[0];
          values2.date_end = date[1];

          //Manipulating object 2 and assigning to values3
          let values3 = _.omit(values2, "date");
          //Assigning to the id variable store info to set correctly the id
          let id = store.profileUser.user.id;
          const REST_API_URL = `http://localhost:5000/services/${id}`;

          fetch(REST_API_URL, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values3),
          })
            .then((response) => {
              if (response.ok) {
                Swal.fire("Servicio creado exitosamente", "", "success");
                resetForm({ values: "" });
                // return response.json();
              } else {
                // HANDLE ERROR

                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Problemas al crear servicio",
                });

                // throw new Error("Something went wrong");
              }
            })
            .then((data) => {
              // HANDLE RESPONSE DATA
              // console.log(data);
            })
            .catch((error) => {
              // HANDLE ERROR
              console.log(error);
            });
        }}
      >
        {({ values }) => (
          <div className="mt-5 pt-5 w-100 mx-auto">
            <div className="card border-info">
              <h5 className="card-header">
                <strong>Publicación de Servicio</strong>
              </h5>
              <div className="card-body">
                <Form>
                  <div className="row g-3">
                    <div className="col-md-4">
                      <Field
                        type="radio"
                        name="gender"
                        value="1"
                        className="form-check-input"
                      />
                      <label htmlFor="checkFemale" className="form-check-label">
                        Mujer
                      </label>
                    </div>
                    <div className="col-md-4">
                      <Field
                        type="radio"
                        name="gender"
                        value="2"
                        className="form-check-input"
                      />
                      <label htmlFor="checkMale" className="form-check-label">
                        Hombre
                      </label>
                    </div>
                    <div className="col-md-4">
                      <Field
                        type="radio"
                        name="gender"
                        value="3"
                        className="form-check-input"
                      />
                      <label htmlFor="checkMale" className="form-check-label">
                        Ambos
                      </label>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="age_start">Edad mínima:</label>
                      <Field
                        className="form-control"
                        name="age_start"
                        placeholder="Edad desde"
                        type="number"
                        min="60"
                      />
                      <ErrorMessage
                        name="age_start"
                        component="div"
                        className="field-error text-danger"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="age_end">Edad máxima:</label>
                      <Field
                        className="form-control"
                        name="age_end"
                        placeholder="hasta"
                        type="number"
                        max="115"
                      />
                      <ErrorMessage
                        name="age_end"
                        component="div"
                        className="field-error text-danger"
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="notes">Notas:</label>
                      <Field
                        className="form-control"
                        name="notes"
                        placeholder="especificaciones"
                        component="textarea"
                        rows=""
                        cols="100"
                      />
                    </div>

                    <div className="form-group">
                      <label>Fecha Final:</label>
                      <DateRangePicker
                        name="date"
                        onChange={setDate}
                        value={date}
                        minDate={new Date()}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="price">Precio servicio:</label>
                      <Field
                        className="form-control"
                        name="price"
                        placeholder="Precio servicio"
                        type="number"
                      />
                    </div>
                    <div class="d-grid gap-2 mt-3">
                      {/* <div className="col-md-6 mt-4"> */}
                      <button className="btn btn-primary" type="submit">
                        Enviar
                      </button>
                      {/* </div> */}
                      {/* <div className="col-md-6 mt-4"> */}
                      <button className="btn btn-warning" type="reset">
                        Cancelar
                      </button>
                      {/* </div> */}
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Services;
