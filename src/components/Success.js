import React, { useState } from 'react';
import { Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';



export const Success = () => {
  // document.cookie = 'sid=true';
  const { logout, currentUser } = useAuth();
  const [error, setError] = useState();
  const navigate = useNavigate();

  function handleLogOut() {
    return (
      logout(),
   
      navigate('/logedout')
     
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
