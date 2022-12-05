import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import '../styles/career.scss';
import backgroundImage from '../assets/background-image.jpg';
import backEndDev from '../assets/back-end-dev.png';
import frontEndDev from '../assets/front-end-dev.png';
import creativeCoder from '../assets/creative-coding.png';
import DropDownMenu from '../components/DropDownMenu';
import BookAppointmentButton from '../components/BookAppointmentButton';

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
      <DropDownMenu />
      <img
        className='background-image'
        src={backgroundImage}
      />
      <article className='career-info-container'>
        <div className='career-info'>
          {Object.keys(career).length !== 0 && <div>
            <div className='career-image-title'>
              <img src={jobImages[jobId - 1]} alt="img" width={325} />
              <h2 className='career-title'>{career.job.title}</h2>
            </div>
            <h4 >{career.job.body}</h4>

            <div className='career-info-breakdown'><strong className='bold-title'>Average Salary:</strong>{career.job.average_salary}</div>
            <div className='career-info-breakdown'><strong className='bold-title'>Salary Range: </strong>{career.job.salary_range}</div>
            <div className='career-info-breakdown'><strong className='bold-title'>Training Needed: </strong>{career.job.training}</div>
            <div className='career-info-breakdown'><strong className='bold-title'>Necessary Skills: </strong>{career.job.skills}</div>


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
            <BookAppointmentButton />
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

