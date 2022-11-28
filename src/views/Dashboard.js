import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import CareerTile from '../components/CareerTile';

import '../styles/Dashboard.css';
import UserAppointments from '../components/UserAppointments';
import backgroundImage from '../assets/background-image.jpg';
import Logo from '../assets/Logo.svg';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = event => {
    event.preventDefault();
    axios
      .post('/logout', res => {
        console.log(res);
      })
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
    <main>
      <div className='dashboard'>
        <button onClick={handleLogout}>Logout</button>
        <img
          className='Logo'
          height={200}
          width={100}
          src={Logo}
          alt='Logo SVG'
        />
        <h1>Welcome user! You are one step closer to a brighter future! </h1>
        <h3>Quiz results.....</h3>
        <CareerTile />
        <UserAppointments />
      </div>
      <img
        className='background-image'
        src={backgroundImage}
      />
    </main>
  );
};

export default Dashboard;
