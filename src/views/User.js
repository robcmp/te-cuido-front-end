import React from "react";
import SidebarUser from "../components/SidebarUser";
import { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState("");
  const welcome = JSON.parse(localStorage.getItem("loginUser"));
  //console.log(welcome);
  useEffect(() => {
    fetch("http://localhost:5000/me", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("access_token")
        )}`,
      },
      body: JSON.stringify(""),
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data.current_user);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <SidebarUser />
        </div>
        <div className="col-md-8 mt-5 pt-5 ">
          <h1 className="mx-5">
            Bienvenido {welcome.user.name + " " + welcome.user.last_name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default User;
