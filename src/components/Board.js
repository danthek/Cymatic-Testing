import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export const Board = () => {
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();

  async function toLogIn() {
    return navigate("/login");
  }

  function handleLogOut() {
    return logout(),
    navigate("/logedout");
  }

  /*   function handleLogOut() {
    return (
      logout(),
      navigate('/logedout'),
    )
  } */
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Cymatic Dashboard</h2>
          {currentUser && currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3 ">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <Container className="d-flex align-items-center">
        <div className="w-100 text-center mt-2">
          <Button variant="link" onClick={toLogIn}>
            Log In
          </Button>
        </div>
        <div className="w-100 text-center mt-2">
          <Button variant="link" onClick={handleLogOut}>
            Log Out
          </Button>
        </div>
      </Container>
    </>
  );
};
