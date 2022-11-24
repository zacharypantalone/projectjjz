



export const initialQuestion = [
  {
    questionText: "Would you prefer to work on-site or remotely?",
    answerOptions: [
     {answerText: "On-site", isCorrect: false},
     {answerText: "Remotely", isCorrect: false} 
    ]
  }
]





export const questions1 = [
  {
    questionText: 'What is your strongest skill?',
    answerOptions: [
      { answerText: 'Logical thinking', /*SELECTION */ isCorrect: false },
      { answerText: 'Communication', isCorrect: false }
      
    ],
  },
  {
    questionText: 'Do you prefer manipulating data, or creative tasks?',
    answerOptions: [
      { answerText: 'I love data!', isCorrect: false },
      { answerText: "I love creating!", /*SELECTION */ isCorrect: true }
    ],
  },
  {
    questionText: 'Would you prefer to create application for users or tools for professionals?',
    answerOptions: [
      { answerText: 'I want to create apps for the everyday joe.', /*SELECTION */ isCorrect: true },
      { answerText: 'I want to create apps for all my fellow geeks.', isCorrect: false }
    ],
  },
  {
    questionText: 'In your day-to-day, would you enjoy working with informational-based, or visual-based programs?',
    answerOptions: [
      { answerText: "I'm more of and informational person", /*SELECTION */ isCorrect: false },
      { answerText: "I'm more of a visual person", isCorrect: false },
    ],
  },
];










export const questions2 = [ /*🛑 WE STILL NEED TO FIGURE OUR SECOND MVP IN THIS SERIES OF QUESTIONS 🛑*/
  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    questionText: 'The iPhone was created by which company?',
    answerOptions: [
      { answerText: 'Apple', isCorrect: true },
      { answerText: 'Intel', isCorrect: false },
      { answerText: 'Amazon', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false },
    ],
  },
  {
    questionText: 'How many Harry Potter books are there?',
    answerOptions: [
      { answerText: '1', isCorrect: false },
      { answerText: '4', isCorrect: false },
      { answerText: '6', isCorrect: false },
      { answerText: '7', isCorrect: true },
    ],
  },
];

