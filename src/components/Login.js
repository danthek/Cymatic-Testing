import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import CyPassword from "./cymaticPassword";
import logo from "../images/cymaticLogo.jpg";


export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const mountedRef = useRef(true);
  const [initSdk, setInitSdk] = useState(false);
  const [emailFullInput, setEmailFullInput] = useState(false);
  const [passwordFullInput, setPasswordFullInput] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(false);
      await login(emailRef.current.value, passwordRef.current.value);
      document.cookie = "sid=true";
      navigate("/board");
      /*   let res; res.cookie('cymatic-cookie', 'cookie-value', {
        expires: new Date(Date.now() + 900000),
        httpOnly: false,
      }); */
    } catch {
      setError("Failed to Log in");
    }
    setLoading(false);
  }

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);



  return (
    <div>

      <CyPassword initSdk={initSdk} setInitSdk={setInitSdk} />
      <Card >
        <Card.Body>
          <div style={styles.formHeader}>
            <img style={styles.logo} src={logo} alt="Logo" />
            <h2 className="text-center mb-4">Cymatic Test Login</h2>
            <h6 style={styles.user}>
              {" "}
              Current user: {currentUser && currentUser.email}{" "}
            </h6>
          </div>
          {/*   {JSON.stringify(currentUser)} */}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="form" className="mb-4">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required placeholder="Put your email. ej: @gmail.com, @outlook.com" 
              onChange={e=>setEmailFullInput(true)} />
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required placeholder="Top secret password"
              onChange={e=>setPasswordFullInput(true)}
              />
            </Form.Group>
            <Button
              variant="warning"
              disabled={emailFullInput && passwordFullInput ? false : true}
              className="w-100"
              type="submit"
              style={styles.backGround}
            >
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div style={styles.linkText} className="w-100 text-center mt-2">
        Don't have an account?{" "}
        <Link style={styles.link} to={"/signup"}>
          Sign Up
        </Link>
      </div>
    </div>
    //document.cookie = 'sid=;expires=Thu, 01 Jan 1970 00:00:01 GMT;
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

