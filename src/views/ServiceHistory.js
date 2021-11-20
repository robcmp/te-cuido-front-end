import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import CardServiceHistory from "../components/CardServiceHistory";
import Swal from "sweetalert2";

const ServiceHistory = () => {
  const { store, actions } = useContext(Context);
  const [services, setServices] = useState([]);

  const profil = JSON.parse(localStorage.getItem("loginUser"));
  console.log(profil.user.id);
  let id = profil.user.id;
  // console.log(id);
  useEffect(() => {
    const REST_API_URL = `http://localhost:5000/reservations/carer/${id}`;
    fetch(REST_API_URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div id="outer-container">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            {services.map((service, i) => (
              <div className="col-md-3 my-3 mx-auto">
                <CardServiceHistory
                  key={i}
                  data={service}
                  image="https://via.placeholder.com/400x200"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHistory;
