import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { initialQuestion, questions1, questions2 } from './QuizQuestions';

export default function Quiz() {
  const [quizzes, setQuizzes] = useState([
  ]);

  useEffect(() => {
    axios.get(`/quiz`).then(data => {
      console.log();
    });
  }, []);

  
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isRemote, setIsRemote] = useState(undefined)
  const [questions, setQuestions] = useState([])

  const handleAnswerButtonClick = (answerOption) => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);

    if (currentQuestion === 0) {
      console.log(answerOption)
      if (answerOption === "Remotely") {
        setIsRemote(true);
        setQuestions(questions1);

      } else {
        setIsRemote(false);
        setQuestions(questions2)
      }
    } 
    
    else {

      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        alert("You're all set! Click here to head back to the dashboard for your results");
      }
    }
  }

  console.log(isRemote);
  

	return (
		<div id='Quiz-page'>
				{false ? (
				<div className='score-section'>You scored 1 out of {initialQuestion.length}</div>
			) : (
				<>
        {currentQuestion === 0?
        <div className='answer-section'>
          <div className='question-text'>{initialQuestion[currentQuestion].questionText}</div>
        {initialQuestion[currentQuestion].answerOptions.map((answerOptions, index) => (
          <button onClick={() => handleAnswerButtonClick(answerOptions.answerText)}>{answerOptions.answerText}</button>
        ))}
      </div> :
      
      <div className='answer-section'>
      <div className='question-text'>{questions[currentQuestion].questionText}</div>
    {questions[currentQuestion].answerOptions.map((answerOptions, index) => (
      <button onClick={() => handleAnswerButtonClick(answerOptions.answerText)}>{answerOptions.answerText}</button>
    ))}
        
  </div>}
					<div className='question-section'>
						<div className='question-count'>
              {/* WE NEED TO FIGURE OUT HOW TO TRACK WHICH QUESTION WE ARE ON THE LINE BELOW  */}
							<span>Question{currentQuestion + 1}</span>/{initialQuestion.length} 
						</div>
						
					</div>
					
				</>
			)}
		
		</div>
	);


}