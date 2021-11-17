import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";
import { Modal, Button } from "react-bootstrap";

const CardConfirmation = (props) => {
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  const reserveDetail = () => {
    setShow(true);
  };

  const confirmService = (e) => {
    Swal.fire({
      title: "Esta seguro de aceptar el servicio? ",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No aceptar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        confirmServiceById(e.target.id);
      } else if (result.isDenied) {
        Swal.fire("El servicio no ha sido aceptado", "", "info");
      }
    });
  };

  const confirmServiceById = (id) => {
    const REST_API_URL = `http://localhost:5000/reserve_confirmation/${id}`;
    fetch(REST_API_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // return response.json();
          Swal.fire("Servicio aceptado", "", "success");
        } else if (response.status === 404) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error al confirmar servicio",
          });
        }
      })
      .then((data) => {})
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error al confirmar servicio",
        });
        console.log(error);
      });
  };

  const rejectService = (e) => {
    Swal.fire({
      title: "Esta seguro de aceptar el servicio?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No aceptar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        rejectServiceById(e.target.id);
      } else if (result.isDenied) {
        Swal.fire("El servicio no ha sido rechazado", "", "info");
      }
    });
  };

  const rejectServiceById = (id) => {
    const REST_API_URL = `http://localhost:5000/reserve_rejection/${id}`;
    fetch(REST_API_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // return response.json();
          Swal.fire("Servicio rechazado", "", "success");
        } else if (response.status === 404) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error al rechazar servicio",
          });
        }
      })
      .then((data) => {})
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error al rechazar servicio",
        });
        console.log(error);
      });
  };

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
                onClick={reserveDetail}
              >
                {" "}
                VER{" "}
              </button>
              <div className="d-flex">
                <button
                  className="btn btn-success"
                  id={props.data.id}
                  onClick={confirmService}
                >
                  {" "}
                  ACEPTAR{" "}
                </button>
              </div>
              <div className="d-flex">
                <button
                  className="btn btn-danger"
                  id={props.data.id}
                  onClick={rejectService}
                >
                  {" "}
                  RECHAZAR{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Detalles Servicio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{props.data.notes}</p>
          <p>{props.data.date_init}</p>
          <p>{props.data.price}</p>
          <p>{props.data.date_end}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
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
              <p>{store.detailReserve.notes}</p>
              <p>{store.detailReserve.date_init}</p>
              <p>{store.detailReserve.price}</p>
              <p>{store.detailReserve.date_end}</p>
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

export default CardConfirmation;
