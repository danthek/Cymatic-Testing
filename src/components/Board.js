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
     
          <div style={styles.formHeader}>

          <h2 style={styles.linkText} className="text-center mb-4">Congrats! Loged in.</h2>
          <h6 style={styles.user}>
              {" "}
              Current user: {currentUser && currentUser.email}{" "}
            </h6>
         {/*  <Link disabled style={styles.backGround} to="/update-profile" className="btn btn-primary w-100 mt-3 ">
            Update Profile
          </Link> */}
          </div>
    
      <Container className="d-flex align-items-center">
    
        <div className="w-100 text-center mt-2">
          <Button style={styles.link} variant="link" onClick={handleLogOut}>
            Log Out
          </Button>
        </div>
      </Container>
    </>
  );
};

const styles = {
  logo: {
    width: "14%",
    height: "10%",
    marginRight: 10,
    marginTop: -3,
  },
  formHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  link: {
    color: "#f15a24",
  },
  user: {
    color: "#8c8c8c",
  },
  backGround: {
    backgroundColor: " #f15a24",
    border: "none",
    color: "#ffffff",
  },
  linkText: {
    color: "#ffffff",
  },
};