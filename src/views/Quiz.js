import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Quiz() {
  const [quizzes, setQuizzes] = useState([
  ]);

  useEffect(() => {
    axios.get(`/quiz`).then(data => {
      console.log();
    });
  }, []);

  return (
    <div id='Quiz-page'>
      <p>This is the Quiz page</p>
    </div>
  );
}