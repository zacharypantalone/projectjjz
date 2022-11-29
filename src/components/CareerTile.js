import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../styles/CareerTile.scss';
import { useNavigate } from 'react-router';

const CareerTile = () => {
  //Quiz results would give you the Career ex. tech
  const [quizResults, setQuizResults] = useState();
  //Job would give you the jobs that fall within the Career category ex. creative coding, web dev
  const [jobs, setJobs] = useState([{ job1: '' }, { job2: '' }, { job3: '' }]);

  // const handleLogoutClick = (event) => {
  //   event.preventDefault()
  // }

  const navigate = useNavigate();

  useEffect(() => {
    
    axios.get(`/quizresults`).then(res => {
      console.log(res.data[0])
      setJobs([
        {job1: res.data[0].title},
        {job1: res.data[0].img},
        {job1: res.data[0].body},
        {job2: res.data[1].title},
        {job2: res.data[1].img},
        {job2: res.data[1].body},
        {job3: res.data[2].title},
        {job3: res.data[2].img},
        {job3: res.data[2].body},
      ]);
    });
    // .then(console.log(jobs))
  }, []);

  return (
    <article className='career-tiles'>
      <div className='career-tile'>
        {jobs.map(job => (
          <p>{job.job1}</p>
        ))}
        <button onClick={() => {
          navigate('/career');
        }}>Click here for more info!
        </button>
      </div>
      <div className='career-tile'>
        {jobs.map(job => (
          <p>{job.job2}</p>
        ))}
            <button onClick={() => {
          navigate('/career');
        }}>Click here for more info!
        </button>
      </div>
      <div className='career-tile'>
        {jobs.map(job => (
          <p>{job.job3}</p>
        ))}
            <button onClick={() => {
          navigate('/career');
        }}>Click here for more info!
        </button>
      </div>
    </article>
  );
};

export default CareerTile;
