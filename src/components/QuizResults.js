import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../styles/QuizResults.scss';
import backEndDev from '../assets/back-end-dev.png';
import frontEndDev from '../assets/front-end-dev.png';
import creativeCoder from '../assets/creative-coding.png';
import { useNavigate } from 'react-router';

const QuizResults = () => {
  const [jobs, setJobs] = useState([]);
  const jobImages = [backEndDev, frontEndDev, creativeCoder];
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/quizresults`).then(res => {
      setJobs(res.data);
    });
  }, []);

  const handleRetake = () => {
    axios.delete('/quizresults').then(navigate('/quiz'));
  };

  return (

    <article>

      <h3>
        Now that you have taken our quiz you're one step closer to a better
        future!
      </h3>
      <h3>Here are the results from your last quiz</h3>
      <div className='career-tiles'>
        {jobs.map((job, index) => (
          <div className='career-tile'>
            <img
              src={jobImages[index]}
              alt='img'
              width={175}
            />
            <div>
              <h3>{job.title}</h3>
              <p>{job.body}</p>
            </div>
            <button
              onClick={() => {
                navigate(`/career/${index + 1}`);
              }}
            >
              Click here for more info!
            </button>
          </div>
        ))}
      </div>
      <div>
        <h3 className='quiz-retake-prompt'>
          If you would like to retake the quiz for any reason you can click
          below
        </h3>
        <button
          type='button'
          onClick={handleRetake}
        >
          Retake Quiz
        </button>
      </div>
    </article>
  );
};

export default QuizResults;
