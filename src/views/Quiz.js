import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import backgroundImage from '../assets/background-image.jpg';
import '../styles/Quiz.scss';

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [questionCount, setQuestionCount] = useState(0);
  const [quizResults, setQuizResults] = useState([1, 2, 3]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/quizquestions').then((res) => {
      setQuestions(res.data);
    });
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    setQuestionCount((prevCount) => prevCount + 1);
  };
  const handleFinalClick = (event) => {
    event.preventDefault();
    axios.post('/quizresults', quizResults);

    navigate('/dashboard');
  };

  const renderQuiz = () => {
    if (questionCount !== questions.length) {
      return (
        <div className='quiz-main'>
          <img
            className='background-image'
            src={backgroundImage}
          />
          <div className='quiz-tile'>
          {questions[questionCount].question}
          <button onClick={handleClick}>
            {questions[questionCount].answer_one}
          </button>
          <button onClick={handleClick}>
            {questions[questionCount].answer_two}
          </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className='quiz-main'>
          <img
            className='background-image'
            src={backgroundImage}
          />
          <div className='quiz-tile'>
          <button onClick={handleFinalClick}>
            You're all set! Click here to go back to your dashboard and see the
            results
          </button>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <img
        className='background-image'
        src={backgroundImage}
      />
      {questions.length > 0 ? (
        <div>{renderQuiz()}</div>
      ) : (
        <div>Questions not populated yet</div>
      )}
    </>
  );
}
