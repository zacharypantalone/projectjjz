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
    </article>
  );
};

export default CareerTile;
