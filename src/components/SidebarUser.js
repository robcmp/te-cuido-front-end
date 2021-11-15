import React from "react";
// import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import "../styles/sidebarUser.css";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const SidebarUser = (props) => {
  // const { store, actions } = useContext(Context);
  const history = useHistory();

  const getStorage = JSON.parse(localStorage.getItem("loginUser"));

  const logOut = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <Menu>
      <Link
        className="menu-item"
        to={getStorage.user.role === 2 ? "/carer/profile" : "/user/profile"}
      >
        <i className="bi bi-person-square"></i>Información Personal
      </Link>
      {getStorage.user.role === 2 ? (
        <Link className="menu-item" to="/carer/service_publication">
          <i className="bi bi-cart-dash"></i>Publicación de Servicios
        </Link>
      ) : (
        <></>
      )}
      <Link
        className="menu-item"
        to={
          getStorage.user.role === 2
            ? "/carer/service_confirmation"
            : "/user/client_reservation"
        }
      >
        <i className="bi bi-cart-dash"></i>
        {getStorage.user.role === 2
          ? "Reservas Pendiente"
          : "Reserva Por Pagar/Agendados"}
      </Link>
      {getStorage.user.role === 2 ? (
        <Link className="menu-item" to="/carer/service_history">
          <i className="bi bi-cart-dash"></i>Historial de Servicios
        </Link>
      ) : (
        <Link className="menu-item" to="/user/list_publication">
          <i className="bi bi-cart-dash"></i>Lista de Servicios
        </Link>
      )}
      <Link className="menu-item" to="/login" onClick={logOut}>
        <i class="bi bi-box-arrow-left"></i>Cerrar Sesion
      </Link>
    </Menu>
  );
};
export default SidebarUser;
