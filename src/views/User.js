import React from "react";
import SidebarUser from "../components/SidebarUser";

const User = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <SidebarUser />
        </div>
        <div className="col-md-8"></div>
      </div>
    </div>
  );
};

export default User;
