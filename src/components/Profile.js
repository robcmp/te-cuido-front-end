import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { Link, useParams} from 'react-router-dom';

const Profile = () => {

    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getPeopleinfo(params.id)
    }, [])

    return (
        <div className="container-fluid d-flex justify-content-center mt-5">
            <div className="card" style={{ width: "630px", height: "auto" }}>

                <div className="row g-0">
                    <div className="col-md-8">
                        <img src="http://placehold.it/900x814" className="img-fluid rounded" alt="..." />
                    </div>
                    <div className="col-md-4">
                        <div className="card-body">
                            <h5 className="card-title">{store.profileUser.name}</h5>
                            <p className="card-text">
                                <p>Apellido: {store.profileUser.last_name}</p>
                                <p>Contraseña: {store.profileUser.password}</p>
                                <p>Email: {store.profileUser.email}</p>
                                <p>ID: {store.profileUser.number_id}</p>
                                <p>País: {store.profileUser.country}</p>
                                <p>Ciudad: {store.profileUser.city}</p>
                                <p>Teléfono: {store.profileUser.phone}</p>
                                <p>Ocupación: {store.profileUser.occupation}</p>

                            </p>
                            <div className="d-flex justify-content-between">
                        <Link to={"/"} className="btn btn-outline-primary">Back</Link>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
  };
  
  export default Profile;