import React, { useEffect, useState } from 'react';
import axios from 'axios';

import backgroundImage from '../assets/background-image.jpg';

export default function Schedule() {
  const [quizResults, setquizResults] = useState({});

  useEffect(() => {
    axios.get(`/quizresults`).then(res => {
      setquizResults(res.data);
    });
  }, []);

  console.log(quizResults);
  return (
    <div id='schedule'>
      <img
        className='background-image'
        src={backgroundImage}
        alt='background'
      />
      <section class="career-buttons">
        {quizResults.map(result => {
          return <button>{result.title}</button>;
        })}
      </section>
    </div>
  );
}
