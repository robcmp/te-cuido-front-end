import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SidebarUser from "../components/SidebarUser";

import CardService from "../components/CardService";

const ListPublications = () => {
  const [isLoading, setLoading] = useState(true);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const REST_API_URL = "http://localhost:5000/list_services";
    fetch(REST_API_URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => (data !== "" ? setServices(data) : setLoading(false)));
    // actions.getDetailChar(params.id);
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div id="outer-container">
          <div className="col-md-2">
            <SidebarUser />
          </div>
          <div className="col-md-10">
            <div id="page-wrap" className="col-md-12 my-3">
              {isLoading ? (
                services.map((service, i) => (
                  <div className="col-md-3 my-3 mx-auto">
                    <CardService
                      key={i}
                      data={service}
                      image="https://via.placeholder.com/400x200"
                    />
                  </div>
                ))
              ) : (
                <h1>No tiene Servicios Reservados</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPublications;
