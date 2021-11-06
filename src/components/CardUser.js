import React, { useEffect, useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import "../styles/cardUser.css";
import Swal from "sweetalert2";

const CardUser = (props) => {
  const [isBanned, setBanned] = useState(false);

  useEffect(() => {
    console.log("Here");
    console.log(props.is_active);
    if (props.is_active === false) {
      console.log("Dentro del If");
      setBanned(false);
    }
  }, [props.is_active]);

  const banConf = (e) => {
    Swal.fire({
      title: "Usted quiere banear este usuario?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No banear`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        banUser(e.target.id);
      } else if (result.isDenied) {
        Swal.fire("Usuario no ha sido baneado", "", "info");
      }
    });
  };

  const banUser = (id) => {
    const REST_API_URL = `http://localhost:5000/banuser/${id}`;
    const body = { is_active: false };
    fetch(REST_API_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) {
          // return response.json();
          Swal.fire("Usuario baneado", "", "success");
          setBanned(true);
          console.log(isBanned);
        } else if (response.status === 404) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Usuario ya fue baneado",
          });
        }
      })
      .then((data) => {
        // HANDLE RESPONSE DATA
        // console.log(data);
      })
      .catch((error) => {
        // HANDLE ERROR
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Usuario ya fue baneado",
        });
        console.log(error);
      });
  };

  const deleteConf = (e) => {
    Swal.fire({
      title: "Usted quiere borrar este usuario?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No borrar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        handleRemove(e.target.id);
      } else if (result.isDenied) {
        Swal.fire("Usuario no ha sido borrado", "", "info");
      }
    });
  };

  const handleRemove = (id) => {
    const REST_API_URL = `http://localhost:5000/delete_user/${id}`;
    fetch(REST_API_URL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // return response.json();
          Swal.fire("Usuario borrado", "", "success");
          setBanned(true);
          console.log(isBanned);
        } else if (response.status === 404) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Usuario ya fue baneado",
          });
        }
      })
      .then((data) => {
        // HANDLE RESPONSE DATA
        // console.log(data);
      })
      .catch((error) => {
        // HANDLE ERROR
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Usuario ya fue borrado",
        });
        console.log(error);
      });
  };

  return (
    <>
      <div className="card scrolling-wrapper borders">
        <img src={props.image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title text-center">{props.data.name}</h5>
        </div>
        <div className="card-footer text-center">
          <div className="d-flex justify-content-evenly">
            <div className="d-flex">
              {props.data.is_active ? (
                <button
                  className="btn btn-primary"
                  id={props.data.id}
                  onClick={banConf}
                  name="desbloquear"
                >
                  {" "}
                  DESBLOQUEAR{" "}
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  id={props.data.id}
                  onClick={banConf}
                  name="bloquear"
                >
                  {" "}
                  BLOQUEAR{" "}
                </button>
              )}
            </div>
            <div className="d-flex">
              <button
                className="btn btn-primary"
                id={props.data.id}
                onClick={deleteConf}
              >
                {" "}
                BORRAR{" "}
              </button>
            </div>
            <div className="d-flex"></div>
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

export default CardUser;
