import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import backgroundImage from '../assets/background-image.jpg';


export default function Career() {

  const [career, setCareer] = useState([]);

  const { jobId } = useParams();
  useEffect(() => {
    axios
      .get(`/careerinfo/${jobId}`)
      .then(res => {
        setCareer(res.data)
      })

  }, [])

  console.log("HERE", career)
  return (
    <div>
            <img
        className='background-image'
        src={backgroundImage}
      />
      <article>
      <img src={career.img} alt="img" width={400}></img>
      <div style={{ color: "white" }}>{career.title}</div>
      <div style={{ color: "white" }}>{career.body}</div>
      <div style={{ color: "white" }}>Average Salary: {career.average_salary}</div>
      <div style={{ color: "white" }}>Salary Range: {career.salary_range}</div>
      <div style={{ color: "white" }}>Training Needed: {career.training}</div>
      <div style={{ color: "white" }}>Necissary Skills: {career.skills}</div>
      <h3>Learning Links:</h3>
      <a href="url">{career.learning_links}</a>
      <h3>Related: </h3>
      <a href="url">{career.articles}</a>
      </article>
    </div>
  );
}

