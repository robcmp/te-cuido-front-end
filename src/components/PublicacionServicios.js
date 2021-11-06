import React from "react";
import "../index.css";
import Swal from "sweetalert2";

const deleteServices = (e) => {
  Swal.fire({
    title: "Usted quiere borrar el servicio?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Si",
    denyButtonText: `No borrar`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      deleteServicesById(e.target.id);
    } else if (result.isDenied) {
      Swal.fire("El servicio a sido borrado", "", "info");
    }
  });
};

const deleteServicesById = (id) => {
  const REST_API_URL = `http://localhost:5000/delete_services_by_id/${id}`;
  fetch(REST_API_URL, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        // return response.json();
        Swal.fire("Servicio Borrado", "", "success");
      } else if (response.status === 404) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El servicio fue borrado",
        });
      }
    })
    .then((data) => {})
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El servicio ya fue borrado",
      });
      console.log(error);
    });
};

const PublicacionServicios = (props) => {
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
                VER{" "}
              </button>
            </div>
            <div className="d-flex">
              <button
                className="btn btn-primary"
                id={props.data.id}
                onClick={deleteServices}
              >
                {" "}
                DELETE{" "}
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

export default PublicacionServicios;
