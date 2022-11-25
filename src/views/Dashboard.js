import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { careerList } from '../careerList';



export default function Dashboard() {

  // add conditional rending in dashboard component - axios get quiz, axios get articles
  // put results into state - render career tiles 

  const handleLogoutClick = (event) => {
    event.preventDefault()

  }
  return (
    careerList.map((career) => {
      return (
        <div>
          <img src={career.img} alt="" width="400" height="300"></img>
          <h1>{career.title}</h1>
          <p>{career.body}</p>
          <button>Career here</button>
          <div id='dashboard-page'>
            <p>This is the dashboard page</p>
            <button type="submit" onClick={handleLogoutClick}>Logout</button>
          </div>
        </div>

      )
    })
  )
}
