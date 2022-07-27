import * as logic from '../src/index.js';

const nameGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const question = logic.randomNum();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

logic.gameLogic(nameGame, getGameData);

export default getGameData;
