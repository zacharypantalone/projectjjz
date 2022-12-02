import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Quiz.scss';
import '../styles/index.css';
import backgroundImage from '../assets/background-image.jpg';
import QuizItem from './QuizItem';

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
    axios.post('/quizresults', quizResults).then(() => navigate('/dashboard'));
  };

  const renderQuiz = () => {
    if (questionCount !== questions.length) {
      return (
        <div>
          <img
            className='background-image'
            src={backgroundImage}
          />

          <div class='wrapper'>
            <div class='carousel'>
              {questions.map((question, index) => (
                <QuizItem
                  questions={questions}
                  index={index}
                  handleClick={handleClick}
                />
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={handleFinalClick}>
            You're all set! Click here to go back to your dashboard and see the
            results
          </button>
        </div>
      );
    }
  };

  return (
    <>
      <div>{renderQuiz()}</div>
    </>
  );
}
