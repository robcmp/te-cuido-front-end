import React from 'react'
import { withFormik, Form, Field } from 'formik'

const Login = (props) => {
  const loginStyle = {
    margin: "32px auto 37px",
    maxWidth: "530px",
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)"
  }

  return(
    <React.Fragment>
      <div className="container">
        <div className="login-wrapper" style={loginStyle}>
          <h2>Login Page</h2>
          <Form className="form-container">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="text" name="email" className={"form-control"} placeholder="Email" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" className={"form-control"} placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </Form>
        </div>
      </div>
    </React.Fragment>
  )
}

const LoginFormik = withFormik({
  mapPropsToValues: (props) => {
    return {
      email: props.email || '',
      password: props.password || ''
    }
  },
  handleSubmit: (values) => {
    console.log(values)
  }
})(Login)

export default LoginFormik