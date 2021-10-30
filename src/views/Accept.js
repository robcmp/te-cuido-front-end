import React from "react";
import { Link } from "react-router-dom";
import SidebarAdmin from "../components/SidebarAdmin";
import UserList from "../components/UserList";

const Admin = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div id="outer-container">
          <div className="col-md-2">
            <SidebarAdmin
              pageWrapId={"page-wrap"}
              outerContainerId={"outer-container"}
            />
          </div>
          <div className="col-md-10">
            <div id="page-wrap" className="d-flex justify-content-center">
              <div className="">
                <UserList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
