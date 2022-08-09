import React, { useEffect } from 'react';
import { Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const LogedOut = () => {
  const navigate = useNavigate();

  async function toLogIn() {
    return navigate('/login');
  }

  useEffect(() => {
    document.cookie = 'sid=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  });

  return (
    <>
     
          <h2  style={styles.linkText} className='text-center mb-4'>You Loged Out.</h2>
     
      <div className='w-100 text-center mt-2'>
        <Button style={styles.link} variant='link' onClick={toLogIn}>
          Log In
        </Button>
      </div>
    </>
  );
};
/*   let res;
  res.cookie("cymatic-cookie", { expires: Date.now() })
  res.clearCookie("cymatic-cookie"); */

  
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
  