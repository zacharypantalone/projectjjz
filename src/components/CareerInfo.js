import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



 const CareerInfo = () => {
  const [job, setJob] = useState();

  // useEffect(() => {
  //   const currentJob = job
  //   axios.get(`/careerinfo${currentJob}`).then(res => {
  //     console.log(res.data[0])
  //     setJob([
  //       {job: res.data[0].title}
  //     ])
  //   })
    
  // }, []);
  // const { jobId } = useParams(); 
  // useEffect(() => {
  //   alert(jobId);
  // }, [])


      return (
        <article>
          {/* <h1>{job}</h1> */}
          {/* will move this inline styling i promise 
          <img src={career.img} alt="" width="400" height="300"/>
          <h1>{career.title}</h1>
          <p>{career.body}</p>
          <h3>Average Salary: {career.avgSalary}</h3>
          <h3>Salary Range: {career.salaryrange}</h3>
          <h3>Neccisary training: {career.training}</h3>
          <h4>Skills needed: {career.skills}</h4>
          <h4>Learning Resources: <a href="url">{career.learninglinks}</a></h4>
          <h4>Relevant Articles: <a href="url">{career.articles}</a></h4> */}
        </article>
      )     
}

export default CareerInfo;