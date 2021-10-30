import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const Services = () => {
  const [date, setDate] = useState([new Date(), new Date()]);

  return (
    <div className="container">
      <h1>Services</h1>
      <Formik
        initialValues={{
          checked: false,
          age_start: "",
          age_end: "",
          notes: "",
          date: date,
        }}
        onSubmit={async (values) => {
          console.log(values);
        }}
      >
        {({ values }) => (
          <div className="mt-5 pt-5 w-50 mx-auto">
            <div class="card border-info">
              {/* <img src="..." class="card-img-top" alt="..." /> */}
              <h5 class="card-header">Publicacion de Servicio</h5>
              <div class="card-body">
                <Form>
                  <div className="row">
                    <div role="group" aria-labelledby="checkbox-group">
                      <label>
                        <Field
                          type="checkbox"
                          name="checkedFemale"
                          value="Hombre"
                        />
                        Mujer
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="checkedMale"
                          value="Mujer"
                        />
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
