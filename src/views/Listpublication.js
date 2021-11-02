import React from "react";
import { Link } from "react-router-dom";
import SidebarUser from "../components/SidebarUser";
import ServiceList from "../components/ServiceList";

const Listpublication = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div id="outer-container">
          <div className="col-md-2">
            <SidebarUser
              //pageWrapId={"page-wrap"}
              //outerContainerId={"outer-container"}
            />
          </div>
          <div className="col-md-10">
            <div id="page-wrap" className="d-flex justify-content-center">
              <div className="">
                <ServiceList/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listpublication;
