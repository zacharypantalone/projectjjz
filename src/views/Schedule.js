import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Schedule() {
  const [] = useState([]);

  useEffect(() => {
    axios.get(`/schedule`).then(data => {
      console.log();
    });
  }, []);

  return (
    <div id='Schedule-page'>
      <p>This is the Schedule page</p>
    </div>
  );
}
