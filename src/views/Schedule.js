import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../styles/schedule.scss';
import backgroundImage from '../assets/background-image.jpg';

export default function Schedule() {
  const [quizResults, setquizResults] = useState({});

  useEffect(() => {
    axios.get(`/quizresults`).then(res => {
      setquizResults(res.data);
    });
  }, []);

  return (
    <div id='schedule'>
      <img
        className='background-image'
        src={backgroundImage}
        alt='background'
      />
      <section className='career-buttons'>
        {quizResults.length > 0 ? (
          quizResults.map(result => {
            return <button key={result.title}>{result.title}</button>;
          })
        ) : (
          <p>No Quiz Results found</p>
        )}
      </section>
    </div>
  );
}
