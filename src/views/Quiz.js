import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [questionCount, setQuestionCount] = useState(0);
  const [quizResults, setQuizResults] = useState([1, 2, 3]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/quizquestions').then(res => {
      setQuestions(res.data);
    });
  }, []);

  const handleClick = event => {
    event.preventDefault();
    setQuestionCount(prevCount => prevCount + 1);
  };
  const handleFinalClick = event => {
    event.preventDefault();
    axios.post('/quizresults', quizResults)
    .then(() => navigate('/dashboard'));
  };

  const renderQuiz = () => {
    if (questionCount !== questions.length) {
      return (
        <div>
          {questions[questionCount].question}
          <button onClick={handleClick}>
            {questions[questionCount].answer_one}
          </button>
          <button onClick={handleClick}>
            {questions[questionCount].answer_two}
          </button>
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
      {questions.length > 0 ? (
        <div>{renderQuiz()}</div>
      ) : (
        <div>Questions not populated yet</div>
      )}
    </>
  );
}

//   const [currentQuestion, setCurrentQuestion] = useState(0)
//   const [isRemote, setIsRemote] = useState(undefined)

//   const [passedInitialQuestion, setPassedInitialQuestion] = useState(false)
//   const [quizComplete, setQuizComplete] = useState(false) // OR THIS NEEDS TO BE SET TO UNDEFINED

//   const handleAnswerButtonClick = (answerOption) => {
//     const nextQuestion = currentQuestion + 1;
//     setCurrentQuestion(nextQuestion);

//     // CONSIDER VISUAL MODE HOOK

//     if (currentQuestion === 0 && !passedInitialQuestion) {
//       console.log(answerOption)
//       if (answerOption === "Remotely") {
//         // setIsRemote(true);
//         setQuestions(
//           axios.get
//           // AXIOS REQUEST
//         );
//         setCurrentQuestion(0) // PROBABLY DON'T NEED THIS LINE
//         // setPassedInitialQuestion(true) // AND THIS EITHER

//       } else {
//         // setIsRemote(false);
//         setQuestions(questions2)
//         setCurrentQuestion(0)
//         // setPassedInitialQuestion(true)
//       }
//     }

//     else {

//       if (nextQuestion < questions.length) {
//         setCurrentQuestion(nextQuestion);
//       } else {
//         alert("You're all set! Click here to head back to the dashboard for your results");
//         setQuizComplete(true,
//           // axios.post ??
//           );

//       }
//     }
//   }

//   console.log(isRemote);

// 	return (
// 		<div id='Quiz-page'>

//         {currentQuestion === 0 && !passedInitialQuestion ?
//         <div className='answer-section'>
//           <div className='question-text'>{initialQuestion[currentQuestion].questionText}</div>
//         {initialQuestion[currentQuestion].answerOptions.map((answerOptions, index) => (
//           <button onClick={() => handleAnswerButtonClick(answerOptions.answerText)}>{answerOptions.answerText}</button>
//         ))}
//       </div>

//       :

//       <div className='answer-section'>
//       <div className='question-text'>{questions[currentQuestion].questionText}</div>
//     {questions[currentQuestion].answerOptions.map((answerOptions, index) => (
//       <button onClick={() => handleAnswerButtonClick(answerOptions.answerText)}>{answerOptions.answerText}</button>
//     ))}

//   </div>}
// 					<div className='question-section'>
// 						<div className='question-count'>
//               {/* WE NEED TO FIGURE OUT HOW TO TRACK WHICH QUESTION WE ARE ON THE LINE BELOW  */}
// 							<span>Question{currentQuestion + 1}</span>/{initialQuestion.length}
// 						</div>

// 					</div>

// 		</div>
// 	);

// }
