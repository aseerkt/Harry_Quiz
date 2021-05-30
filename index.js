//Harry Quiz
require('colors');
const readLineSync = require('readline-sync');
const questions = require('./questions');

let score = 0;

function welcome() {
  let name = readLineSync.question('What is your name?\n');
  console.log(
    `Welcome ${name}! Let us see how well do you know Harry Potter\n`
  );
}

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
  } else {
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
