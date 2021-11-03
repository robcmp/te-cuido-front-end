import React, { useState, useEffect, useContext  } from "react";
import { Context } from "../store/appContext";
import PublicacionServicios from "../components/PublicacionServicios";
import Swal from "sweetalert2";

const ServicesPublication = () => {
    const { store, actions } = useContext(Context);
    const [services, setServices] = useState([]);
    
    const profil = JSON.parse(localStorage.getItem("loginUser"));
    console.log(profil.user.id)
    let id =profil.user.id;
    // console.log(id);
    useEffect(() => {
      const REST_API_URL = `http://localhost:5000/service_publication/${id}`;
      fetch(REST_API_URL, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => setServices(data));
    }, []);

    

    return (
      <>
        <div className="row">
          <div className=" mt-4 pb-4 pt-2 mb-4">
            {services.map((service, i) => (
              <div className="col-md-12 my-3">
                <PublicacionServicios
                  key={i}
                  data={service}
                  image="https://via.placeholder.com/400x200"
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

export default ServicesPublication;
