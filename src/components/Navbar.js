import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">
          <img
            src="https://placeholder.pics/svg/150x50/888888/EEE/Logo"
            alt="..."
            height="36"
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Link
              </a>
            </li>
          </ul>
          <div className="d-flex">
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
  );
};

export default Navbar;
