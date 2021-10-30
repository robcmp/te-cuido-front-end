import React from "react";
import "../styles/sidebarUser.css";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const SidebarUser = () => {
  return (
    <Menu>
      <Link className="menu-item" to="/user/profile">
        <i className="bi bi-person-square"></i> Información Personal
      </Link>
      <a className="menu-item" to="">
        <i className="bi bi-cart-dash"></i>Publicación de Servicios
      </a>
      <a className="menu-item" href="/salads">
        <i className="bi bi-cart-dash"></i> Pendientes/Aceptados
      </a>
      <a className="menu-item" href="/salads">
        <i className="bi bi-cart-dash"></i> lista de Servicios
      </a>
    </Menu>
  );
};
export default SidebarUser;
