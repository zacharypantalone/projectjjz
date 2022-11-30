import React from 'react';
import { useNavigate } from 'react-router';

const QuizNotTaken = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/quiz');
  };

  return (
    <div>
      <h3>
        75% of users reported an increase in life satisfaction after switching
        careers
      </h3>
      <h3>
        Over half of our users have reported a 50% earnings increase since
        finding a new career
      </h3>
      <button
        type='submit'
        onClick={handleClick}
      >
        Find your new career!
      </button>
    </div>
  );
};
export default QuizNotTaken;
