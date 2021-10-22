import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import "../styles/card.css";

const CardUser = (props) => {
  return (
    <div className="card scrolling-wrapper borders">
      <img src={props.image} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title text-center">{props.data.name}</h5>
      </div>
      <div className="card-footer text-center">
        <div className="d-flex justify-content-evenly">
          <div className="d-flex">
            <button className="btn btn-primary"> BAN </button>
          </div>
          <div className="d-flex">
            <button className="btn btn-primary"> DELETE </button>
          </div>
          <div className="d-flex">
            <button className="btn btn-primary"> EDIT </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUser;
