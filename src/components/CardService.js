import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../index.css";
import { Link } from "react-router-dom";
// import "../styles/cardService.css";
import Swal from "sweetalert2";

const CardService = (props) => {
  const {store, actions} = useContext(Context);
  const Reservar = () => {
    actions.setDetail(props.data);
    console.log(store.detailService);
    //const REST_API_URL = `http://localhost:5000/reserve/${id}`;
    // fetch(REST_API_URL, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(body),
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       // return response.json();
    //       Swal.fire("Reserva realizada", "", "success");
    //     //  setReserve(true);
    //     } else if (response.status === 404) {
    //       Swal.fire({
    //         icon: "error",
    //         title: "Oops...",
    //         text: "la reserva ya fue realizada",
    //       });
    //     }
    //   })
    //   .then((data) => {
    //     // HANDLE RESPONSE DATA
    //     // console.log(data);
    //   })
    //   .catch((error) => {
    //     // HANDLE ERROR
    //     Swal.fire({
    //       icon: "error",
    //       title: "Oops...",
    //       text: "Usuario ya fue reservado",
    //     });
    //     console.log(error);
    //   });
  };

  const ServiceDetail = () => {
    actions.setDetail(props.data);
    console.log(props.data);
  };
///////////////////////////////////////////////////////////////
//const CardService = (props) => {
//const [isReserve, setReserve] = useState(false);

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
                onClick={ServiceDetail}
              >
                {" "}
                VER{" "}
              </button>
            </div>
            <div className="d-flex">
              <button className="btn btn-primary" onClick={Reservar}>
                {" "}
                RESERVAR{" "}
              </button>
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
            <div className="modal-body">
              <p>{store.detailService.notes}</p>
              <p>{store.detailService.date_init}</p>
              <p>{store.detailService.price}</p>
              <p>{store.detailService.date_end}</p>
            </div>
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
