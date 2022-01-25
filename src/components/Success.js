import React, { useState } from 'react';
import { Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

let res;

export const Success = () => {
  // document.cookie = 'sid=true';
  const { logout, currentUser } = useAuth();
  const [error, setError] = useState();
  const navigate = useNavigate();

  function handleLogOut() {
    return (
      logout(),
      (document.cookie = 'sid=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'),
      navigate('/logedout'),
      res.cookie('cymatic-cookie', { expires: Date.now() }),
      res.clearCookie('cymatic-cookie')
    );
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Congrats! Loged in.</h2>

          <Link to='/board' className='btn btn-primary w-100 mt-3 '>
            Dashboard
          </Link>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        <Button variant='link' onClick={handleLogOut}>
          Log Out
        </Button>
      </div>
    </>
  );
};
