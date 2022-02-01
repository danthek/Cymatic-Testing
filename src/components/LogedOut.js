import React, { useState } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

let res;

export const LogedOut = () => {
  const navigate = useNavigate();
  /*   res.cookie("cymatic-cookie", { expires: Date.now() })
  res.clearCookie("cymatic-cookie"); */
  
  async function toLogIn() {
    return navigate("/login");
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">You Loged Out.</h2>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={toLogIn}>
          Log In
        </Button> 
      </div>
    </>
      (document.cookie = "sid=;expires=Thu, 01 Jan 1970 00:00:01 GMT;")
  );
};


