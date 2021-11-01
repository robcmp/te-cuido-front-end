import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import _ from "lodash";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";
import SidebarUser from "../components/SidebarUser";

const rutRegex = "^([0-9]+-[0-9Kk])$";

const phoneChile = "/^(+?56)?(s?)(0?9)(s?)[9876543]d{7}$/";

const Profile = () => {
    const welcome = JSON.parse(localStorage.getItem("loginUser"));
    console.log(welcome);

    const formSchema = Yup.object().shape({
        photo: Yup.string().oneOf([Yup.ref("photo")]),
        name: Yup.string()
            .max(30, `máximo 30 caracteres`)
            .required("Campo requerido"),
        last_name: Yup.string()
            .max(30, `máximo 30 caracteres`)
            .required("Campo requerido"),
        email: Yup.string()
            .required("Campo requerido")
            .email("Correo electrónico invalido")
            .max(30, `máximo 30 caracteres`),
        number_id: Yup.string()
            .required("Campo requerido")
            .matches(rutRegex, "RUT inválido"),
        country: Yup.string().required("Campo requerido"),
        city: Yup.string().required("Campo requerido"),
        phone: Yup.string().required("Campo requerido"),
        occupation: Yup.string().required("Campo requerido"),
    });

    return (

        <div className="mt-5 pt-5">
            <SidebarUser />
            <div className="container">

                <div className="row">

                    <div className="col-md-8">

                        <Formik
                            initialValues={{
                                photo: "",
                                name: welcome.user.name,
                                last_name: welcome.user.last_name,
                                email: welcome.user.email,
                                number_id: welcome.user.number_id,
                                country: welcome.user.country,
                                city: welcome.user.city,
                                phone: welcome.user.phone,
                                occupation: welcome.user.occupation,
                            }}
                            validationSchema={formSchema}
                            onSubmit={(values) => {
                                let values2 = _.omit(values, "number_id", "photo");
                                const REST_API_URL = `http://localhost:5000/update_user/${welcome.user.id}`;
                                fetch(REST_API_URL, {
                                    method: "PUT",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify(values2),
                                })
                                    .then((response) => {
                                        if (response.ok) {
                                            Swal.fire("Datos Actualizados", "", "success");
                                            // return response.json();

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
                                // console.log(JSON.stringify(values));
                            }}
                        >
                            {(formsProps) => (
                                <Form>
                                    <div className="form-group">
                                        <label htmlFor="photo">Foto de Perfil:</label>
                                        <input
                                            name="photo"
                                            type="file"
                                            onChange={(event) => {
                                                formsProps.setFieldValue(
                                                    "photo",
                                                    event.target.files[0]
                                                );
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
                                        <label htmlFor="number_id">DNI:</label>
                                        <Field
                                            className="form-control"
                                            name="number_id"
                                            placeholder=""
                                            type="string"
                                            disabled
                                        />
                                        <ErrorMessage
                                            name="number_id"
                                            component="div"
                                            className="field-error text-danger"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="country">País:</label>
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
                                        <label htmlFor="phone">Teléfono:</label>
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
                                        <label htmlFor="Occupation">Ocupación:</label>
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
                                    <div class="d-grid gap-2">
                                        <button
                                            type="submit"
                                            className="btn btn-primary fw-bold mt-4"
                                        >
                                            Actualizar
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
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
        </div>
    );
};

export default Profile;
