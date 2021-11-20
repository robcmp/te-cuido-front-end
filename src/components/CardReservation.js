import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import ReactDOM from "react-dom";
import { Modal, Button } from "react-bootstrap";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const CardReservation = (props) => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);

  //REACT BOOTSTRAP MODAL
  const [show, setShow] = useState(false);
  const [showPay, setShowPay] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleClosePay = () => {
    setShowPay(false);
  };

  //REACT BOOTSTRAP MODAL

  const reserveDetail = () => {
    // actions.setDetailReserve(props.data);
    setShow(true);
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "50",
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return console.log(actions.order.capture());
    alert("hola");
    // Swal.fire("Servicio aceptado", "", "success");
  };
  useEffect(() => {
    // luego de montarse el componente, le pedimos al backend el preferenceId
    // const REST_API_URL = `http://localhost:5000/payment/${id}`;
    // fetch(REST_API_URL, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       // return response.json();
    //       Swal.fire("Servicio aceptado", "", "success");
    //     } else if (response.status === 404) {
    //       Swal.fire({
    //         icon: "error",
    //         title: "Oops...",
    //         text: "Error al confirmar servicio",
    //       });
    //     }
    //   })
    //   .then((data) => {})
    //   .catch((error) => {
    //     Swal.fire({
    //       icon: "error",
    //       title: "Oops...",
    //       text: "Error al confirmar servicio",
    //     });
    //     console.log(error);
    //   });
  }, [id]);

  const payService = (e) => {
    setShowPay(true);
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
            <div className="d-flex m-4">
              <button
                className="btn btn-primary"
                id={props.data.id}
                onClick={reserveDetail}
              >
                {" "}
                VER{" "}
              </button>
            </div>
            <div className="d-flex m-4">
              <button
                className="btn btn-primary"
                id={props.data.id}
                onClick={payService}
              >
                {" "}
                PAGAR{" "}
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
          <Modal.Title>Servicio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{props.data.notes}</p>
          <p>{props.data.date_init}</p>
          <p>{props.data.price}</p>
          <p>{props.data.date_end}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary">Prueba</Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showPay}
        onHide={handleClosePay}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Pago</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PayPalButton
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePay}>
            Cerrar
          </Button>
          <Button variant="primary">Prueba</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CardReservation;
