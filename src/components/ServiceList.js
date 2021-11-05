import React, { useState, useEffect } from "react";
import CardService from "./CardService";
import Swal from "sweetalert2";

const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const REST_API_URL = "http://localhost:5000/list_services";
    fetch(REST_API_URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => setServices(data));
    // actions.getDetailChar(params.id);
  }, []);

  
  return (
    <>
      <div className="row">
        <div className=" mt-4 pb-4 pt-2 mb-4">
          {services.map((service, i) => (
            <div className="col-md-12 my-3">
              <CardService
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

export default ServiceList;
