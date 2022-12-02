import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../styles/schedule.scss';
import backgroundImage from '../assets/background-image.jpg';

export default function Schedule() {
  const [quizResults, setquizResults] = useState({});
  const [mentors, setMentors] = useState({});

  useEffect(() => {
    axios.get(`/quizresults`).then(res => {
      setquizResults(res.data);
    });
  }, []);

  const careerClick = (e) => {
    e.preventDefault();
    axios.get('/mentors')
  }

  return (
    <div id='schedule'>
      <img
        className='background-image'
        src={backgroundImage}
        alt='background'
      />
      <section className='career-recommendations'>
        <h3>Select one of your career recommendations to see the available mentors to chat with</h3>
        <section className='career-buttons'>
        {quizResults.length > 0 ? (
          quizResults.map(result => {
            return <button key={result.title} onClick={careerClick}>{result.title}</button>;
          })
        ) : (
          <p>No Quiz Results found</p>
        )}
        </section>
      </section>
    </div>
  );
}
