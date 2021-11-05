import React, { useEffect, useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
//import "../styles/cardService.css";
import Swal from "sweetalert2";
//import Swal from "sweetalert";

const Reservar = () => {
  Swal.fire ({
    title: "Reserva hecha!",
    //text: "esta es la respuesta de la prueba",
    icon: "success",
    //button: "Aceptar Reserva"
  });
}
const CardService = (props) => {
  return (
    <>
      <div className="card scrolling-wrapper borders">
        <img src={props.image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title text-center">{props.data.notes}</h5>
        </div>
        <div className="card-footer text-center">
          <div className="d-flex justify-content-evenly">
            <div className="d-flex">
              <button
                className="btn btn-primary"
                id={props.data.id}
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                {" "}
                VIEW{" "}
              </button>
            </div>
            <div className="d-flex" >
            
              <button className="btn btn-primary" onClick={()=> Reservar()}> RESERVAR </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardService;
