import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import SidebarUser from "../components/SidebarUser";
import UserList from "../components/UserList";
import CardReservation from "../components/CardReservation";

const ClientReservation = () => {
  const { store, actions } = useContext(Context);
  const [services, setServices] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const profil = JSON.parse(localStorage.getItem("loginUser"));
  console.log(profil.user.id);
  let id = profil.user.id;
  // console.log(id);
  useEffect(() => {
    const REST_API_URL = `http://localhost:5000/reservations/client/${id}`;
    fetch(REST_API_URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => (data !== "" ? setServices(data) : setLoading(false)));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <SidebarUser />
        </div>
        <div className="col-md-10">
          {isLoading ? (
            services.map((service, i) => (
              <div className="col-md-3 my-3 mx-auto">
                <CardReservation
                  key={i}
                  data={service}
                  image="https://via.placeholder.com/400x200"
                />
              </div>
            ))
          ) : (
            <h1>No tiene reservas pendientes</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientReservation;
