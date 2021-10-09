import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
const RegisterForm=()=>{
  return(
    <>
      const schema = yup.object().shape({
    firstName:yup.string().required(),
    lastname:yup.string().required(),
    username:yup.string().required(),
   
  });
  return(
  <div className ="RegisterUser">
    <Formik
     ValidationSchema={schema}
     onSubmit={console.log}
     initialValues={{
       firstName:"",
       lastName:"",
       userName:""
     }}>
     {({handleSubmit,handleChange,values,touched,errors})=>
    <Formik noValidate onSubmit = {handleSubmit}>
      <Form.Group md = "" controlId="validationFormik01">
        <Form.Label>First Name</Form.Label>
        <Form.Control
        type="text"
        name="firstName"
        placeholder ="First Name"
        value={values.firstName}
        onChange={handleChange}
        isValid={touched.firstName && !errors.firstName}
        isInvalid ={!errors.lastName}
        />
        <Form.Control.Feedback type ="invalid">
          {errors.firstName}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId = "validationFormik02">
        <Form.Label>LastName</Form.Label>
        <Form.Control
        type="text"
        name="firstName"
        placeholder ="First Name"
        value={values.firstName}
        onChange={handleChange}
        isValid={touched.firstName && !errors.firstName}
        isInvalid ={!!errors.lastName}
        isValid={touched.lastName && !errors.lastName}
        />
           <Form.Control.Feedback type= "invalid">
              {errors.lastName}
           </Form.Control.Feedback>
   </Form.Group>
   <Form.Group as={Col} controlId= "validationFormik03">
     <Form.label>UserName</Form.label>
     <InputGroup hasValidation>
        <InputGroup.Prepend>
          <InputGroup.Text id ="inputGroupPrepend">@</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          type="text"
          placeholder="UserName"
          aria-describedby="inputGroupPrepend"
          name="username"
          value={values.username}
          onChange={handleChange}
          isInvalid={!!errors.username}
          isValid={touched.username && !errors.username}
        />
        <Form.Control.Feedback type="invalid">
            {errors.username}
        </Form.Control.Feedback>
    </InputGroup>
   </Form.Group>
    </Formik>}
  </div>
     );
     );
 }

  export default RegisterForm

