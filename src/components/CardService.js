import React, { useEffect, useContext, useState } from "react";
import _ from "lodash";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../index.css";
// import "../styles/cardService.css";
import Swal from "sweetalert2";
import { number, string } from "yup/lib/locale";
import { Modal, Button } from "react-bootstrap";

const CardService = (props) => {
  const { store, actions } = useContext(Context);
  const history = useHistory();
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  const objReserve = {
    name: string,
    gender: number,
    age: number,
    notes: string,
    carer_id: number,
    client_id: number,
    status: string,
  };
  const reservar = (idService) => {
    const detailService = _.omit(
      store.detailService,
      "age_end",
      "date_start",
      "date_end",
      "price",
      "status",
      "id"
    );

    console.log(detailService);
    console.log(store.profileUser.user.id);
    objReserve["name"] = "Reserve 1";
    objReserve["gender"] = detailService["gender"];
    objReserve["age"] = detailService["age_start"];
    objReserve["notes"] = detailService["notes"];
    objReserve["carer_id"] = detailService["user_id"];
    objReserve["client_id"] = store.profileUser.user.id;
    objReserve["status"] = "RESERVED";

    const REST_API_URL = `http://localhost:5000/reserve/${idService.target.id}`;
    fetch(REST_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objReserve),
    })
      .then((response) => {
        if (response.ok) {
          // return response.json();
          Swal.fire("Servicio aceptado", "", "success");
          // updatePage();
          // location.reload();
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

  const updatePage = () => {
    console.log("Hola Aqui");
    setInterval(history.push("/user/client_reservation"), 10000);
  };
  const serviceDetail = () => {
    setShow(true);
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
                onClick={serviceDetail}
              >
                {" "}
                VER{" "}
              </button>
            </div>
            <div className="d-flex">
              <button
                id={props.data.id}
                className="btn btn-primary"
                onClick={reservar}
              >
                {" "}
                RESERVAR{" "}
              </button>
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
    </>
  );
};

export default CardService;
