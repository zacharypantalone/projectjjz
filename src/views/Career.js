import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import '../styles/career.scss';
import backgroundImage from '../assets/background-image.jpg';
import backEndDev from '../assets/back-end-dev.png';
import frontEndDev from '../assets/front-end-dev.png';
import creativeCoder from '../assets/creative-coding.png';

export default function Career() {

  const [career, setCareer] = useState({});
  const jobImages = [creativeCoder, frontEndDev, backEndDev];
  const { jobId } = useParams();


  useEffect(() => {
    axios.get(`/careerinfo/${jobId}`).then(res => { setCareer(res.data) })
  }, [])

  console.log("HERE", career)
  return (
    <div className='career-component'>
      <img
        className='background-image'
        src={backgroundImage}
      />
      <article className='career-info-container'>
        <div className='career-info'>
          {Object.keys(career).length !== 0 && <div>
            <img src={jobImages[jobId - 1]} alt="img" width={300} />
            <h1>{career.job.title}</h1>
            <h4>{career.job.body}</h4>
            
              <div className='career-info-breakdown'>Average Salary: {career.job.average_salary}</div>
              <div className='career-info-breakdown'>Salary Range: {career.job.salary_range}</div>
              <div className='career-info-breakdown'>Training Needed: {career.job.training}</div>
              <div className='career-info-breakdown'>Necessary Skills: {career.job.skills}</div>
           

            <h3>Related Articles: </h3>
            <div className='links'>
              {career.article.map((article) => (
                <a href={article.article}>{article.article}</a>
              ))}
            </div>
            <h3>Learning Links:</h3>
            <div className='links'>
              {career.learning.map((learning) => (
                <a href={learning.link}>{learning.link}</a>
              ))}
            </div>
          </div>}
        </div>
      </article>
      <img
        className='background-image'
        src={backgroundImage}
      />
    </div>
  );
}

