import React from "react";
import "../styles/sidebarUser.css";
import { slide as Menu } from "react-burger-menu";

const SidebarUser = () => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        <i className="bi bi-person-square"></i> Información Personal
      </a>
      <a className="menu-item" href="/salads">
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
