import React, { useRef, useState, useEffect } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import CyPassword from './cymaticPassword';

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const mountedRef = useRef(true);
  const [initSdk, setInitSdk] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError('');
      setLoading(false);
      await login(emailRef.current.value, passwordRef.current.value);
      document.cookie = 'sid=true';
      navigate('/success');
      /*   let res; res.cookie('cymatic-cookie', 'cookie-value', {
        expires: new Date(Date.now() + 900000),
        httpOnly: false,
      }); */
    } catch {
      setError('Failed to Log in');
    }
    setLoading(false);
  }

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return (
    <>
      <CyPassword initSdk={initSdk} setInitSdk={setInitSdk} />
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Cymatic Test Login</h2>
          {/*   {JSON.stringify(currentUser)} */}
          {currentUser && currentUser.email}
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='form' className='mb-4'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required />
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className='w-100' type='submit'>
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Don't have an account? <Link to={'/signup'}>Sign Up</Link>
      </div>
    </>
    //document.cookie = 'sid=;expires=Thu, 01 Jan 1970 00:00:01 GMT;
  );
};
