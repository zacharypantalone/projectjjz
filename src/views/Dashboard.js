import React, { useEffect, useState } from 'react';
import axios from 'axios';



export default function Dashboard() {
  


  const handleLogoutClick = (event) => {
    event.preventDefault()
  
  }


  return (
    <div id='dashboard-page'>
      <p>This is the dashboard page</p>
      <button type="submit" onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}
