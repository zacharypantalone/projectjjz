import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';

const Logout = () => {

  const navigate = useNavigate();
  const handleLogout = event => {
    event.preventDefault();
    axios
      .post('/logout', res => { })
      .then(res => {
        if (res.status === 200) {
          navigate('/');
        }
      })
      .catch(res => {
        console.log(res);
      });
  };


  return (
    <div
      onClick={handleLogout}>Logout
    </div>
  )
}

export default Logout