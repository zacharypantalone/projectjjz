import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { initialQuestion, questions1, questions2 } from './QuizQuestions';

export default function Quiz() {
  const [quizzes, setQuizzes] = useState([
  ]);

  // ^^ DO WE NEED THIS?

  useEffect(() => {
    axios.get(`/quiz`).then(data => {
      console.log();
    });
  }, []);

  
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isRemote, setIsRemote] = useState(undefined)
  const [questions, setQuestions] = useState([])
  const [passedInitialQuestion, setPassedInitialQuestion] = useState(false)

  const handleAnswerButtonClick = (answerOption) => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);

    // CONSIDER VISUAL MODE HOOK

    if (currentQuestion === 0 && !passedInitialQuestion) {
      console.log(answerOption)
      if (answerOption === "Remotely") {
        setIsRemote(true);
        setQuestions(questions1);
        setCurrentQuestion(0)
        setPassedInitialQuestion(true)
        

      } else {
        setIsRemote(false);
        setQuestions(questions2)
        setCurrentQuestion(0)
        setPassedInitialQuestion(true)
      }
    } 
    
    else {

      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        alert("You're all set! Click here to head back to the dashboard for your results");
        // AXIOS REQUEST TO DATABASE OF QUIZ RESULTS?
      }
    }
  }

  console.log(isRemote);
  

	return (
		<div id='Quiz-page'>
			
        {currentQuestion === 0 && !passedInitialQuestion ?
        <div className='answer-section'>
          <div className='question-text'>{initialQuestion[currentQuestion].questionText}</div>
        {initialQuestion[currentQuestion].answerOptions.map((answerOptions, index) => (
          <button onClick={() => handleAnswerButtonClick(answerOptions.answerText)}>{answerOptions.answerText}</button>
        ))}
      </div> 
      
      :
      
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
					
				
			
		
		</div>
	);


}