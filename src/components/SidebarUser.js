import React,{useContext} from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import "../styles/sidebarUser.css";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const SidebarUser = (props) => {

  const {store, action } = useContext(Context);

  const getStorage = localStorage.getItem("loginUser")



  return (
    <Menu>
      <Link className="menu-item" to="/user/profile">
        <i className="bi bi-person-square"></i>Información Personal
      </Link>
{ getStorage == undefined ? store.profileUser.user.role===2 ? 
      <Link className="menu-item" to="/user/service_publication">
        <i className="bi bi-cart-dash"></i>Publicación de Servicios
      </Link> : <></>
      
      : }
{ store.profileUser.user.role===2 ?
      <Link className="menu-item" to="">
        <i className="bi bi-cart-dash"></i>Pendientes/Aceptados
      </Link> :  
      <Link className="menu-item" to="">
        <i className="bi bi-cart-dash"></i>Reserva Por Pagar/Agendados
      </Link>
}

{ store.profileUser.user.role===2 ?
      <Link className="menu-item" to="">
      <i className="bi bi-cart-dash"></i>Servicios Creados
    </Link>
      
       :
       <Link className="menu-item" to="">
       <i className="bi bi-cart-dash"></i>Lista de Servicios
     </Link>

}
    </Menu>
  );
};
export default SidebarUser;
