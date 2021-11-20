import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import UserList from "../components/UserList";
import CardConfirmation from "../components/CardConfirmation";
import { slide as Menu } from "react-burger-menu";

const ServiceConfirmation = () => {
  const { store, actions } = useContext(Context);
  const [services, setServices] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const profil = JSON.parse(localStorage.getItem("loginUser"));
  console.log(profil.user.id);
  let id = profil.user.id;
  // console.log(id);
  useEffect(() => {
    const REST_API_URL = `http://localhost:5000/reserved_service/${id}`;
    fetch(REST_API_URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => (data !== "" ? setServices(data) : setLoading(false)));
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          {isLoading ? (
            services.map((service, i) => (
              <div className="my-3">
                <CardConfirmation
                  key={i}
                  data={service}
                  image="https://via.placeholder.com/400x200"
                />
              </div>
            ))
          ) : (
            <h1>No tiene Servicios Reservados</h1>
          )}
          ;
        </div>
      </div>
    </>
  );
};

export default ServiceConfirmation;
