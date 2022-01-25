import React, { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

let res;

export const Board = () => {
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();

  async function toLogIn() {
    return navigate('/login');
  }

  function handleLogOut() {
    return (
      logout(),
      (document.cookie = 'sid=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'),
      navigate('/logedout'),
      res.cookie('cymatic-cookie', { expires: Date.now() }),
      res.clearCookie('cymatic-cookie')
    );
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
          <h2 className='text-center mb-4'>Cymatic Dashboard</h2>
          {currentUser && currentUser.email}
          <Link to='/update-profile' className='btn btn-primary w-100 mt-3 '>
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <Container className='d-flex align-items-center'>
        <div className='w-100 text-center mt-2'>
          <Button variant='link' onClick={toLogIn}>
            Log In
          </Button>
        </div>
        <div className='w-100 text-center mt-2'>
          <Button variant='link' onClick={handleLogOut}>
            Log Out
          </Button>
        </div>
      </Container>
    </>
  );
};
