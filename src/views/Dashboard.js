import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Dashboard() {
  const [] = useState([
  ]);

  useEffect(() => {
    axios.get(`/dashboard`).then(data => {
      console.log();
    });
  }, []);

  return (
    <div id='dashboard-page'>
      <p>This is the dashboard page</p>
    </div>
  );
}
