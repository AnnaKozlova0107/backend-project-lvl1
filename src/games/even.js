import * as logic from '../index.js';

const nameGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const question = logic.randomNum(0, 9);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEvenGame = () => logic.gameLogic(nameGame, getGameData);

export default runEvenGame;
