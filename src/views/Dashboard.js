import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import QuizResults from '../components/QuizResults';
import QuizNotTaken from '../components/QuizNotTaken';
import '../styles/Dashboard.scss';
import backgroundImage from '../assets/background-image.jpg';
import DropDownMenu from '../components/DropDownMenu';
import BookAppointmentButton from '../components/BookAppointmentButton';
import Careersquared from '../assets/Careersquared.svg';

const Dashboard = () => {
  const navigate = useNavigate();

  const [results, setResults] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    Promise.all([axios.get('/quizresults'), axios.get('/user')])
      .then(res => {
        if (res[0].data) {
          setResults(res[0].data);
        }
        if (res[1].data.first_name) {
          setUser(res[1].data.first_name);
        }
      })
      .catch(e => { console.log(e); })
  }, []);


  return (
    <main>
      <DropDownMenu />
      <div className='dashboard'>
        <h1 className='dashboard-welcome'>Welcome {user}!</h1>
        {results.length > 0 ? <QuizResults /> : <QuizNotTaken />}
        <BookAppointmentButton/>
      </div>
      <img
        className='background-image'
        src={backgroundImage}
      />
      <img
        className='Careersquared'
        src={Careersquared}
      />

    </main>
  );
};

export default Dashboard;