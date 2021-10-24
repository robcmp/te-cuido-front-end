import React from 'react';
import { Link } from 'react-router-dom';
import SidebarUser from "../components/SidebarUser";


const Profile = () => {
    const welcome = JSON.parse(localStorage.getItem("loginUser"));
    console.log(welcome);

    return (
        <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <SidebarUser />
         
        </div>
        <div className="col-md-8"></div>
      </div>
        <div className="container-fluid d-flex justify-content-center mt-5">
            <div className="card" style={{ width: "630px", height: "auto" }}>

                <div className="row g-0">
                    <div className="col-md-8">
                        <img src="http://placehold.it/900x814" className="img-fluid rounded" alt="..." />
                    </div>
                    <div className="col-md-4">
                        <div className="card-body">
                            <h5 className="card-title">{welcome.user.name}</h5>
                            <p className="card-text">
                                <p>Apellido: {welcome.user.last_name}</p>
                                <p>Contraseña: {welcome.user.password}</p>
                                <p>Email: {welcome.user.email}</p>
                                <p>ID: {welcome.user.number_id}</p>
                                <p>País: {welcome.user.country}</p>
                                <p>Ciudad: {welcome.user.city}</p>
                                <p>Teléfono: {welcome.user.phone}</p>
                                <p>Ocupación: {welcome.user.occupation}</p>

                            </p>
                            <div className="d-flex justify-content-between">
                                <Link to={"/"} className="btn btn-outline-primary">Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Profile;