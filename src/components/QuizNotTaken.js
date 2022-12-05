import React from 'react';
import { useNavigate } from 'react-router';

import '../styles/QuizNotTaken.scss';

const QuizNotTaken = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/quiz');
  };

  return (
    <div>
      <div className='testimonials-container'>
        <h4 className='testimonial'>
          "I didn't know where to start, I just knew I needed a big change. A friend recommmended Career-Squared which ended up being the push I needed! - Susan Smith"
        </h4>
        <h4 className='testimonial'>
          "This app is the perfect first step to get the ball rolling on your new future" - Ricky Bobby
        </h4>
        <h4 className='testimonial'>
          "Since discovering Career-Squared, I've doubled my annual salary and I no longer dred going to work in the morning" - Scooby Doo
        </h4>
      </div>
      <h2 className='take-quiz-prompt'>
        Click below and take the career quiz to reveal your results!
      </h2>
      <button
        type='submit'
        onClick={handleClick}
      >
        Take the quiz!
      </button>
    </div>
  );
};
export default QuizNotTaken;