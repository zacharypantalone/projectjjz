import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../styles/QuizResults.scss';
import { useNavigate } from 'react-router';

const QuizResults = () => {
  const [jobs, setJobs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    axios.get(`/quizresults`).then(res => {
      setJobs(
        res.data
      );
    });
  }, []);

  const handleRetake = () => {
    axios.delete('/quizresults')
    .then(navigate('/dashboard'))
  }

  return (
    <article className='career-tiles'>
      <h3>Now that you have taken our quiz you're one step closer to a better future!</h3>
      <h3>Here are the results from your last quiz</h3>
      {jobs.map((job, index) => (
        <div className='career-tile'>
          <div>
            <img src={job.img} alt="img" width={150}></img>
            <p>{job.title}</p>
            <p>{job.body}</p>
          </div>
          <button onClick={() => {
            navigate(`/career/${index + 1}`);
          }}>Click here for more info!
          </button>
        </div>
      ))}
      <div>
        <p>If you would like to retake the quiz for any reason you can click below</p>
        <button type='button' onClick={handleRetake}>Retake Quiz</button>
      </div>
    </article>
  );
};

export default QuizResults;
