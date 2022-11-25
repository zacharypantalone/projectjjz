import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { careerList } from '../careerList'


// This Would be our full individual career component when you click on the button in the dashboard tile.

export default function CareerInfo(props) {
  const {career} = props;
  console.log(props)
      return (
        <article>
          {/* will move this inline styling i promise  */}
          <img src={career.img} alt="" width="400" height="300"/>
          <h1>{career.title}</h1>
          <p>{career.body}</p>
          <h3>Average Salary: {career.avgSalary}</h3>
          <h3>Salary Range: {career.salaryrange}</h3>
          <h3>Neccisary training: {career.training}</h3>
          <h4>Skills needed: {career.skills}</h4>
          <h4>Learning Resources: <a href="url">{career.learninglinks}</a></h4>
          <h4>Relevant Articles: <a href="url">{career.articles}</a></h4>
        </article>
      )
  
}