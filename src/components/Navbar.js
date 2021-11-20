import React from "react";
import "../styles/navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };
  return (usePathname() === "/") |
    (usePathname() === "/register") |
    (usePathname() === "/login") |
    (usePathname() === "/aboutus") ? (
    <nav
      id="main_nav"
      className="navbar fixed-top navbar-expand-lg navbar-light bg-white shadow"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">
          <img
            src="https://i.ibb.co/J7Lxj1X/logo.jpg"
            width="80"
            alt=""
            class="d-inline-block align-middle mr-2"
          />
        </a>
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
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link btn-outline-primary rounded-pill px-3"
                  to="/aboutus"
                >
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link btn-outline-primary rounded-pill px-3"
                  href="/#"
                >
                  In prog
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link btn-outline-primary rounded-pill px-3"
                  href="/#"
                >
                  In prog
                </a>
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
            >
              Iniciar Sesión
            </Link>

            <Link
              to="/register"
              className="btn btn-warning fw-bold"
              type="button"
            >
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    </nav>
  ) : (
    <></>
  );
};

export default Navbar;
