import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import DatePicker from "react-datepicker";
import "../../node_modules/react-datepicker/dist/react-datepicker.css";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const Services = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="container">
      <h1>Services</h1>
      <Formik
        initialValues={{
          toggle: " ",
        }}
        onSubmit={async (values) => {
          await sleep(500);
          alert(JSON.stringify(values, null, 2));
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
                        <Field type="checkbox" name="checked" value="Hombre" />
                        Hombre
                      </label>
                      <label>
                        <Field type="checkbox" name="checked" value="Mujer" />
                        Mujer
                      </label>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="edad minima">Edad minima:</label>
                      <Field
                        className="form-control"
                        name="edad-min"
                        placeholder="min"
                        type="int"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="edad maxima">Edad maxima:</label>
                      <Field
                        className="form-control"
                        name="edad-max"
                        placeholder="max"
                        type="int"
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="notas">Notas:</label>
                      <Field
                        className="form-control"
                        name="notas"
                        placeholder="especificaciones"
                        component="textarea"
                        rows=""
                        cols="100"
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Fecha Inicio:</label>
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                      </div>
                      <div className="col-md-6">
                        <label>Fecha Final:</label>

                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                      </div>
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
