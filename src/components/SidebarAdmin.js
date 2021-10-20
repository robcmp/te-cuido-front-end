import React from "react";
import { slide as Menu } from "react-burger-menu";
import "../styles/sidebartest.css";

const SidebarAdmin = (props) => {
  // const clickToggle = () => {
  //   document.getElementById("sidebar").classList.toggle("active");
  //   // $("#sidebar").toggleClass('active')
  // };
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

export default SidebarAdmin;
