import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import backgroundImage from '../assets/background-image.jpg';


export default function Career() {

  const [career, setCareer] = useState({});

  const { jobId } = useParams();


  useEffect(() => {
    axios.get(`/careerinfo/${jobId}`).then(res => {setCareer(res.data)} )
  }, [] )

  console.log("HERE", career)
  return (
    <div>
        <img
        className='background-image'
        src={backgroundImage}
      />
      <article>
      {Object.keys(career).length !==0 && <div>
      <img src={career.job.img} alt="img" width={400}/> 
      <div style={{ color: "white" }}>{career.job.title}</div>
      <div style={{ color: "white" }}>{career.job.body}</div>
      <div style={{ color: "white" }}>Average Salary: {career.job.average_salary}</div>
      <div style={{ color: "white" }}>Salary Range: {career.job.salary_range}</div>
      <div style={{ color: "white" }}>Training Needed: {career.job.training}</div>
      <div style={{ color: "white" }}>Necessary Skills: {career.job.skills}</div>
      <h3>Learning Links:</h3>
       <a href="url">{career.learning_links}</a> 
      <h3>Related: </h3>
      <a href="url">{career.job.article}</a>
      </div>}
      </article>
    </div>
  );
}

