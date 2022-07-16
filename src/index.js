import readlineSync from 'readline-sync';

export const randomNum = () => {
  return Math.ceil(Math.random() * 100 / 15);
};

export const randomSign = () => {
  const coll = ['+', '-', '*'];
  const i = Math.floor(Math.random() * 3) + 1;
  const sign = coll[i];
  return sign;
};

export const gameLogic = (nameGame, taskSubject) => {
  const getName = () => readlineSync.question('May I have your name? ');
  const userName = getName();
  console.log('Hello, ' + userName + '!');

  console.log(nameGame);

  let i = 0;
  while (i < 3) {
    const questionSubject = taskSubject();
    console.log('Question: ' + questionSubject[0]);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === questionSubject[1]) {
      console.log('Correct!');
      i += 1;
    } else {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${questionSubject[1]}.\nLes\'s try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};