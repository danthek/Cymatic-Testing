import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Card, Alert} from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import CyPassword from "./cymaticPassword";
import logo from "../images/cymaticLogo.jpg";

export const Signup = () => {
  const emailRef = useRef();
  /* const passwordRef = useRef(); */
  const passwordConfirmRef = useRef();
  // eslint-disable-next-line no-unused-vars
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [passInput, setPassInput] = useState("");
  const mountedRef = useRef(true);
  const [alert, setAlert] = useState(false);
  const [initSdk, setInitSdk] = useState(true);

  let validPswd = false;
  function validatePass(event) {
    let passwordElement = event.currentTarget.querySelector("[cy-password]");
    validPswd = passwordElement.valid;
  }

  function AlertDismissibleExample() {
    const [show, setShow] = useState(true);

    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Warning! your password is too weak.</Alert.Heading>
          <p>Please choose a stronger password.</p>
        </Alert>
      );
    }
    return null;
  }

  async function handleSubmit() {
    console.log("Password meet criteria?", validPswd);
    if (validPswd === true) {
      if (passInput !== passwordConfirmRef.current.value) {
        return setError("Passwords do not match");
      }
      try {
        setError("");
        setLoading(true);
        await signup(emailRef.current.value, passInput);
        navigate("/board");
      } catch {
        setError("Failed to create an account");
      }
      setLoading(false);
    } else {
      setAlert(true);
      console.log("Password did not meet criteria");
    }
  }

  function callBoth(event) {
    event.preventDefault();
    validatePass(event);
    setTimeout(function () {
      handleSubmit(event);
    }, 3000);
  }

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return (
    <>
      {alert ? <AlertDismissibleExample /> : null}
      <Card>
        <Card.Body>
          <div style={styles.formHeader}>
            <img style={styles.logo} src={logo} alt="Logo" />
            <h2 className="text-center mb-4">Cymatic Test Sign up</h2>
          </div>
          {/*   {JSON.stringify(currentUser)} */}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={callBoth}>
            <Form.Group id="form" className="mb-4">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
              <Form.Label>Password</Form.Label>
              <div>
                <CyPassword
                  initSdk={initSdk}
                  setInitSdk={setInitSdk}
                  setPassInput={setPassInput}
                  required
                />
              </div>
              {/*  <Form.Control type="password" ref={passwordRef} required /> */}

              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>

            <Button
              style={styles.backGround}
              disabled={loading}
              className="w-100"
              type="submit"
            >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div style={styles.linkText} className="w-100 text-center mt-2">
        Already have an account?{" "}
        <Link style={styles.link} to="/login">
          Login
        </Link>
      </div>
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
