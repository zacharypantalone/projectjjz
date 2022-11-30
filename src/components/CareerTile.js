import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../styles/CareerTile.scss';
import { useNavigate } from 'react-router';

const CareerTile = () => {
  const [jobs, setJobs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    axios.get(`/quizresults`).then(res => {
      setJobs(
        res.data
      );
    });
  }, []);

  return (
    <article className='career-tiles'>
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
    </article>
  );
};

export default CareerTile;
