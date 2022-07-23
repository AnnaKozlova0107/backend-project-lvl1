import readlineSync from 'readline-sync';

export const randomNum = () => Math.ceil(Math.random() * 10);

export const gameLogic = (nameGame, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const getName = readlineSync.question('May I have your name? ');
  const userName = getName;
  console.log(`Hello, ${userName}!`);

  console.log(nameGame);
  const numberOfApproaches = 3;
  for (let i = 0; i < numberOfApproaches; i += 1) {
    const gameData = getGameData();
    console.log(`Question: ${gameData[0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === gameData[1]) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${gameData[1]}.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
