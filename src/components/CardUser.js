import React from "react";
import { Link } from "react-router-dom";

const CardUser = (props) => {
  return (
    <div className="card">
      <img src={props.image} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.data.name}</h5>
      </div>
      <div className="card-footer text-center ">
        <div className="row">
          <div className="col-md-8">
            <button className="btn btn-primary">Learn more!</button>
          </div>
          <div className="col-md-4">
            <button className="btn btn-outline-warning">
              <i className="bi bi-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUser;
