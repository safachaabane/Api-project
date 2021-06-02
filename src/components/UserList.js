import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import UserCard from "./UserCard";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  if (loading) {
    return (
      <Spinner
        style={{
          width: "60px",
          height: "60px",
          marginLeft: "550px",
          marginTop: "100px",
        }}
        animation="border"
        variant="secondary"
        role="status"
      ></Spinner>
    )
  }
  return (
    <div>
      <h1 style={{ size: "2rem", margin: "40px", color: "pink" }}>
        Users List :
      </h1>
      <div className="d-flex justify-content-around flex-wrap">
        {users.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
    </div>
  )
};

export default UserList;
