import React from "react";
import { slide as Menu } from "react-burger-menu";
import "../styles/sidebarAdmin.css";


const SidebarAdmin = (props) => {
  // const clickToggle = () => {
  //   document.getElementById("sidebar").classList.toggle("active");
  //   // $("#sidebar").toggleClass('active')
  // };
  return (
    <Menu>
      <a className="menu-item" href="/">
        <i class="bi bi-person-square"></i> Lista de usuarios
      </a>
      <a className="menu-item" href="/salads">
        <i class="bi bi-pin"></i> Lista de publicaciones
      </a>
      <a className="menu-item" href="/salads">
        <i class="bi bi-credit-card"></i> Lista de pagos 
      </a>
      <a className="menu-item" href="/salads">
        <i class="bi bi-archive"></i> Lista de reportes
      </a>
    </Menu>
  );
};

export default SidebarAdmin;
