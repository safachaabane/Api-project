import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const Details = ({ match }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, [match]);
  return (
    <div>
      <Card className="text-center" style={{ width: "20rem" }}>
      <h1 style={{ size: "1rem", margin: "40px", color: "pink" }}>
        Users details :
      </h1>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.adresse}</p>
         
          <Link to="/">
            <Button variant="secondary">Go Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Details;
