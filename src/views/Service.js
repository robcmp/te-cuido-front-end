import React from "react";
import Services from "../components/Services";
import SidebarUser from "../components/SidebarUser";
const Service = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <SidebarUser />
        </div>
        <div className="col-md-8">
          <Services />
        </div>
      </div>
    </div>
  );
};

export default Service;
