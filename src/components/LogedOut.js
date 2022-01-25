import React, { useState } from 'react';
import { Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export const LogedOut = () => {
  const navigate = useNavigate();
  async function toLogIn() {
    return navigate('/login');
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>You Loged Out.</h2>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        <Button variant='link' onClick={toLogIn}>
          Log In
        </Button>
      </div>
    </>
  );
};
