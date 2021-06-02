import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const UserCard = ({user}) => {
  return (
    <div>
      <Card className="text-center" style={{ width: "20rem"}}>
        <span className="profile">{user.name[0]}</span>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <Link to={`/profile/${user.id}`}><Button variant="secondary">view more</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
