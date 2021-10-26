import React,{useState} from 'react';
import { Formik, Field, Form } from 'formik';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const Services = () =>{
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
        <Form>
          {/* 
            This first checkbox will result in a boolean value being stored. Note that the `value` prop
            on the <Field/> is omitted
          */}
          <label>
            <Field type="checkbox" name="toggle" />
            {`${values.toggle}`}
          </label>

          {/* 
            Multiple checkboxes with the same name attribute, but different
            value attributes will be considered a "checkbox group". Formik will automagically
            bind the checked values to a single array for your benefit. All the add and remove
            logic will be taken care of for you.
          */}
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
          <div className="row">
              
              <div className= "col-md-4">
          <label htmlFor="edad minima">Edad minima:</label>
                  <Field
                    className="form-control"
                    name="edad-minima"
                    placeholder=""
                    type="text"
                  />
                  </div>
                  <div className= "col-md-4">
            <label htmlFor="edad maxima">Edad maxima:</label>
                  <Field
                    className="form-control"
                    name="edad-maxima"
                    placeholder=""
                    type="text"
                  />
                  </div>
              
          </div>
          <div className="col-md-4">
          <label htmlFor="notas">Notas:</label>
                  <Field
                    className="form-control"
                    name="notas"
                    placeholder=""
                    type="text-area"
                  />


          </div>
          <div className="row">

          <div className="col-md-4">
              <h2>fecha inicio</h2>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
 
          </div>
          <div className="col-md-4">
          <h2>fecha final</h2>

            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>
          <div className="col-md-4">

          </div>

          </div>
          <button type="submit">offer</button>
          <button type="reset">cancel</button>

        </Form>
      )}
    </Formik>
  </div>
  )
};

export default Services;