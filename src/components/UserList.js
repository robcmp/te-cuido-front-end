import React, { useState, useEffect } from "react";
import CardUser from "./CardUser";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const REST_API_URL = "http://localhost:5000/user";
    fetch(REST_API_URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => setUsers(data));
    // actions.getDetailChar(params.id);
  }, []);

  return (
    <>
      <div className="row">
        <div className=" mt-4 pb-4 pt-2 mb-4">
          {users.map((people, i) => (
            <div className="col-md-12 my-3">
              <CardUser
                key={i}
                data={people}
                image="https://via.placeholder.com/400x200"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserList;
