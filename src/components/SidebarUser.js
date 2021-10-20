import React from "react";
import "../styles/sidebarUser.css";
import { slide as Menu } from "react-burger-menu";

const SidebarUser = () => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        <i class="bi bi-person-square"></i> Lista de Usuarios
      </a>
      <a className="menu-item" href="/salads">
        <i class="bi bi-cart-dash"></i> Test
      </a>
    </Menu>
  );
};

export default SidebarUser;
