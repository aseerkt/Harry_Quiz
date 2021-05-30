//Harry Quiz
require('colors');
const inquirer = require('inquirer');
const readLineSync = require('readline-sync');
const questions = require('./questions');

let score = 0;
let name = null;

function welcome() {
  console.log(`✣  Welcome to HARRY QUIZ ✣\n`.magenta.bold.underline);
  name = readLineSync.question('❓ What is your name?\n'.yellow);
  console.log(
    `Welcome ${name}! Let us see how well do you know Harry Potter\n`.cyan
  );
}

async function askQuestion(question, questionNumber) {
  const qSelector = `Question ${questionNumber}`;

  const res = await inquirer.prompt([
    {
      type: 'list',
      name: qSelector,
      message: question.question,
      choices: question.options,
    },
  ]);

  const ans = res[qSelector];
  console.log(ans);
  if (ans === question.options[question.answer - 1]) {
    console.log('\nRight'.green);
    score++;
  } else {
    console.log('\nWrong'.red);
  }

  console.log(`Current Score: ${score}`.yellow.bold);
  console.log(`-----------------\n`);
}

async function game() {
  for (let i = 0; i < questions.length; i++) {
    let currentQuestion = questions[i];
    await askQuestion(currentQuestion, i + 1);
  }
}

function showScore() {
  console.log(`Congrats ${name}!`.underline.bold);
  console.log(`You scored ${score} out of ${questions.length}\n`);
}

async function main() {
  welcome();
  await game();
  showScore();
}

main();
