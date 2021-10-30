import React from "react";
import "../styles/sidebarUser.css";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const SidebarUser = () => {
  return (
    <Menu>
      <Link className="menu-item" to="/user/profile">
        <i className="bi bi-person-square"></i>Información Personal
      </Link>
      <Link className="menu-item" to="/user/PublicacionServicios">
        <i className="bi bi-cart-dash"></i>Publicacion de Servicios
      </Link>
      <Link className="menu-item" to="">
        <i className="bi bi-cart-dash"></i>Pentiendes/Aceptados
      </Link>
      <Link className="menu-item" to="">
        <i className="bi bi-cart-dash"></i>Lista de Servicios
      </Link>
    </Menu>
  );
};
export default SidebarUser;
