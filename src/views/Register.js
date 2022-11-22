import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [] = useState([
  ]);

  useEffect(() => {
    axios.get(`/register`).then(data => {
      console.log();
    });
  }, []);

  return (
    <div id='Register-page'>
      <p>This is the Register page</p>
    </div>
  );
}