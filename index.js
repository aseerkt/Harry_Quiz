//Harry Quiz
require('colors');
let readLineSync = require('readline-sync');

let score = 0;

function welcome() {
  let name = readLineSync.question('What is your name?\n');
  console.log(
    `Welcome ${name}! Let us see how well do you know Harry Potter?\n`
  );
}

let questions = [
  {
    question: "Name of Harry Potter's Father",
    options: ['Severus Snape', 'Gandalf', 'Voldemort', 'James Potter'],
    answer: 4,
  },
  {
    question: "Name of Harry Potter's owl",
    options: ['Hedwig', 'Fluffy', 'Padfoot', 'Norbert'],
    answer: 1,
  },
  {
    question: "Name Draco Malfoy's Dad.",
    options: [
      'Narcissa Malfoy',
      'John Malfoy',
      'Lucius Malfoy',
      'James Malfoy',
    ],
    answer: 3,
  },
  {
    question: "Name of Lord Voldemort's loyal snake",
    options: ['Padfoot', 'Norbert', 'Fang', 'Nagini'],
    answer: 4,
  },
  {
    question: 'The `Killing Curse` spell of Voldemort',
    options: [
      'Expecto patronum',
      'Avada Kedavra',
      'Wingardium Leviosa',
      'Expelliarmus',
    ],
    answer: 2,
  },
  {
    question: 'What is the spell used for disarming people?',
    options: [
      'Expecto patronum',
      'Avada Kedavra',
      'Wingardium Leviosa',
      'Expelliarmus',
    ],
    answer: 4,
  },
  {
    question: "Who is Harry Potter's godfather?",
    options: ['Voldemort', 'Hagrid', 'Tommy Angelo', 'Sirius Black'],
    answer: 4,
  },
  {
    question: "What was Ron's pet name?",
    options: ['Scrabbers', 'Norbert', 'Fang', 'Hedwig'],
    answer: 1,
  },
  {
    question: 'Who did Draco Malfoy called Mudblood?',
    options: ['Hermione', 'Ron Weasley', 'Harry Potter', 'Ginny'],
    answer: 1,
  },
  {
    question: 'Who married Harry Potter?',
    options: ['Hermione', 'Luna Lovegood', 'Ginny Weasely', 'Cho Chang'],
    answer: 3,
  },
  {
    question: 'Where did exactly Harry meet Tom Riddle for the first time?',
    options: [
      'Hogwarts',
      'Chamber of Secrets',
      'Little Hangleton',
      "Godric's Hollow",
    ],
    answer: 2,
  },
];

function askQuestion(question) {
  // Format options to display
  const printOptionsString = question.options
    .map((opt, index) => `${index + 1}. ${opt}\n`)
    .join('');

  // Ask Question
  let userAnswer = readLineSync.question(
    `${question.question}\n\n${printOptionsString}`.blue.bold
  );

  const userOption = parseInt(userAnswer);

  // Check whether user given options in the expected range
  if (![1, 2, 3, 4].includes(userOption)) {
    console.log(`You have given wrong options, Please try again`);
    askQuestion(question);
  }

  // Calculate score
  if (userOption === question.answer) {
    console.log('\nRight'.green);
    score++;
  } else {
    console.log('\nWrong'.red);
  }

  console.log(`Current Score: ${score}`.yellow.bold);
  console.log('-------------');
}

function game() {
  for (let i = 0; i < questions.length; i++) {
    let currentQuestion = questions[i];
    askQuestion(currentQuestion);
  }
}

function showScore() {
  console.log(`Yay! You scored ${score}`.bgYellow.black);
}

welcome();
game();
showScore();
