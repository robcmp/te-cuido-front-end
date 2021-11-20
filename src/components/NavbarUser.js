import React from "react";
import "../styles/navbar.css";
import { Link, useLocation, useHistory } from "react-router-dom";

const NavbarUser = () => {
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };
  const history = useHistory();

  const getStorage = JSON.parse(localStorage.getItem("loginUser"));

  const logOut = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (usePathname() === "/") |
    (usePathname() === "/register") |
    (usePathname() === "/login") |
    (usePathname() === "/aboutus") ? (
    <></>
  ) : (
    <nav
      id="main_nav"
      className="navbar fixed-top navbar-expand-lg navbar-light bg-white shadow"
    >
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="/#">
          <img
            src="https://i.ibb.co/J7Lxj1X/logo.jpg"
            width="80"
            alt=""
            class="d-inline-block align-middle mr-2"
          />
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="align-self-center collapse navbar-collapse d-lg-flex justify-content-lg-between"
          id="navbarSupportedContent"
        >
          <div class="flex-fill mx-xl-5 mb-2">
            <ul className="nav navbar-nav d-flex justify-content-between mx-xl-5 text-center text-dark">
              <li className="nav-item">
                <Link
                  className="nav-link btn-outline-primary rounded-pill px-3"
                  aria-current="page"
                  to={
                    getStorage.user.role === 2
                      ? "/carer/profile"
                      : "/user/profile"
                  }
                >
                  <i className="bi bi-person-square"></i>Información Personal
                </Link>
              </li>
              {getStorage.user.role === 2 ? (
                <li className="nav-item">
                  <Link
                    className="nav-link btn-outline-primary rounded-pill px-3"
                    to="/carer/service_publication"
                  >
                    <i className="bi bi-cart-dash"></i>Publicación de Servicios
                  </Link>
                </li>
              ) : (
                <></>
              )}
              <li className="nav-item">
                <Link
                  className="nav-link btn-outline-primary rounded-pill px-3"
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
              </li>
              <li className="nav-item">
                {getStorage.user.role === 2 ? (
                  <Link
                    className="nav-link btn-outline-primary rounded-pill px-3"
                    to="/carer/service_history"
                  >
                    <i className="bi bi-cart-dash"></i>Historial de Reservas
                  </Link>
                ) : (
                  <Link
                    className="nav-link btn-outline-primary rounded-pill px-3"
                    to="/user/list_publication"
                  >
                    <i className="bi bi-cart-dash"></i>Lista de Servicios
                  </Link>
                )}
              </li>
              <li className="nav-item">
                <a
                  className="nav-link btn-outline-primary rounded-pill px-3"
                  href="/#"
                >
                  In prog
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar align-self-center d-flex">
            <Link
              to="/login"
              className="btn btn-primary me-4 fw-bold"
              type="button"
              onClick={logOut}
            >
              <i className="bi bi-box-arrow-left"></i>Cerrar Sesion
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarUser;
