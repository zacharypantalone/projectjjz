import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CareerInfo from '../components/CareerInfo';
import { careerList } from '../careerList';

// Full info on a singular job will render here 
export default function Career(props) {
  
  const [career, setCareer] = useState({});

  const { jobId } = useParams(); 
  useEffect(() => {
    // alert(jobId);
    axios
    .get(`/careerinfo/${jobId}`)
    .then(res => {
      console.log("********");
      console.log(res.data);
      setCareer(res.data)
    })

  }, [])

  // const careerProfile = careerList[0];
  return (
    <div>
    <div style={{color: "red"}}>{career.img}</div>
      <div style={{color: "red"}}>{career.title}</div>
      <div style={{color: "red"}}>{career.body}</div>
      <div style={{color: "red"}}>{career.average_salary}</div>
      <div style={{color: "red"}}>{career.salary_range}</div>
      <div style={{color: "red"}}>{career.training}</div>
      <div style={{color: "red"}}>{career.skills}</div>
      <div style={{color: "red"}}>{career.learning_links}</div>
      <div style={{color: "red"}}>{career.articles}</div>

      {/* <CareerInfo career={props}/>  */}
    </div>
  );
}
