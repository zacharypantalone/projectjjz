import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import backgroundImage from '../assets/background-image.jpg';
import DropDownMenu from '../components/DropDownMenu';
import '../styles/Quiz.scss';
import Careersquared from '../assets/Careersquared.svg';


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
    axios.post('/quizresults', quizResults)
    .then(() => navigate('/dashboard'));
  };

  const renderQuiz = () => {
    
    if (questionCount === 0) {
      return (
        
        <div className='quiz-main'>
          <div className='bananas'>
      <p className='quiz-intro-paragraph'>Welcome to the CareerSquared Quiz!
        After answering these questions we will provide you with 3 Career Recommendations. 
        In your Dashboard you will be able to see Links and Resources to help you begin your journey.
        Also make sure to check out the Schedule page to schedule a meeting with a professional in one of your three careers
    </p>
    </div>  
        <div className='quiz-tile'>
          <div className='quiz-question'>
        {questions[questionCount].question}
        </div>
        <button onClick={handleClick}>
          {questions[questionCount].answer_one}
        </button>
        </div>
      </div>

      )
    }
    else if (questionCount !== questions.length) {
      return (
        <div className='quiz-main'>
          <div className='quiz-tile'>
          <div className='quiz-question'>
          {questions[questionCount].question}
          </div>
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
    <DropDownMenu />

      <img
        className='background-image'
        src={backgroundImage}
      />
      <img
        className='Careersquared'
        src={Careersquared}
      />
      
    {questions.length > 0 ? (
        <div>{renderQuiz()}</div>
      ) : (
        <div>Questions not populated yet</div>
      )}
      
     
    </>
  );
}