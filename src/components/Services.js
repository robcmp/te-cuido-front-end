import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import _ from "lodash";
import * as Yup from "yup";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const Services = () => {
  const [date, setDate] = useState([new Date(), new Date()]);
  const formSchema = Yup.object().shape({
    age_start: Yup.number().required("Campo requerido"),
    age_end: Yup.number().required("Campo requerido"),
    notes: Yup.string(),
    date: Yup.date().required("Campo requerido"),
    price: Yup.number().required("Campo requerido"),
  });
  return (
    <div className="container">
      <Formik
        initialValues={{
          checkedFemale: false,
          checkedMale: false,
          age_start: "",
          age_end: "",
          notes: "",
          date: date,
          price: "",
        }}
        validationSchema={formSchema}
        onSubmit={async (values) => {
          // let values2 = _.omit(values, "confirmPassword", "id_photo", "photo");
          console.log(values);
        }}
      >
        {({ values }) => (
          <div className="mt-5 pt-5 w-100 mx-auto">
            <div className="card border-info">
              {/* <img src="..." class="card-img-top" alt="..." /> */}
              <h5 className="card-header">Publicacion de Servicio</h5>
              <div className="card-body">
                <Form>
                  <div className="row">
                    <div>
                      <Field
                        type="checkbox"
                        name="checkedFemale"
                        className="form-check-input"
                      />
                      <label
                        htmlFor="checkedFemale"
                        className="form-check-label"
                      >
                        Mujer
                      </label>
                    </div>
                    <div>
                      <Field
                        type="checkbox"
                        name="checkedMale"
                        className="form-check-input"
                      />
                      <label htmlFor="checkedMale" className="form-check-label">
                        Hombre
                      </label>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="age_start">Edad minima:</label>
                      <Field
                        className="form-control"
                        name="age_start"
                        placeholder="Edad desde"
                        type="number"
                        min="60"
                        max="120"
                      />
                      <ErrorMessage
                        name="age_start"
                        component="div"
                        className="field-error text-danger"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="age_end">Edad maxima:</label>
                      <Field
                        className="form-control"
                        name="age_end"
                        placeholder="hasta"
                        type="number"
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

                    <div className="col-md-6 mt-4">
                      <button className="btn btn-primary" type="submit">
                        Enviar
                      </button>
                    </div>
                    <div className="col-md-6 mt-4">
                      <button className="btn btn-warning" type="reset">
                        Cancelar
                      </button>
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
