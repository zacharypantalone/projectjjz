import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import QuizResults from '../components/QuizResults';
import QuizNotTaken from '../components/QuizNotTaken';

import '../styles/Dashboard.css';
import backgroundImage from '../assets/background-image.jpg';

const Dashboard = () => {
  const navigate = useNavigate();

  const [results, setResults] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    axios.get('/quizresults').then(res => {
      setResults(res.data);
    });
    axios.get('/user').then(res => {
      setUser(res.data.first_name);
    });
  }, []);

  const handleLogout = event => {
    event.preventDefault();
    axios
      .post('/logout', res => {})
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
        <h1>Hi {user}!</h1>
        {results ? <QuizResults /> : <QuizNotTaken />}
      </div>
      <img
        className='background-image'
        src={backgroundImage}
      />
      <button onClick={handleLogout}>Logout</button>
    </main>
  );
};

export default Dashboard;
