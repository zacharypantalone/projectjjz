import React from 'react';

export default function QuizItem(props) {
  const { questions, index, handleClick } = props;

  return (
    <>
      <div class='carousel__item'>
        <div class='carousel__item-head'>🐳</div>
        <div class='carousel__item-body'>
          {questions[index].question}
          <button onClick={handleClick}>
            {questions[index].answer_one}
          </button>
          <button onClick={handleClick}>
            {questions[index].answer_two}
          </button>
        </div>
      </div>
    </>
  );
}