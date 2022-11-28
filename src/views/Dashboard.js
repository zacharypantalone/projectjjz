
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { careerList } from '../careerList';
import CareerTile from '../components/CareerTile';

import '../styles/Dashboard.css';
import UserAppointments from '../components/UserAppointments';
import backgroundImage from '../assets/background-image.jpg';
import Logo from '../assets/Logo.svg';



const Dashboard = () => {
  return (
    <main>

    <div className='dashboard'>
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
  )
}

export default Dashboard
