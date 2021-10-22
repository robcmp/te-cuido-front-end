import React from "react";
import "../styles/sidebarUser.css";
import { slide as Menu } from "react-burger-menu";

const SidebarUser = () => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        <i class="bi bi-person-square"></i> Mi Perfil
      </a>
      <a className="menu-item" href="/salads">
        <i class="bi bi-list-task"></i> Mis Servicios
      </a>
    </Menu>
  );
};

export default SidebarUser;
