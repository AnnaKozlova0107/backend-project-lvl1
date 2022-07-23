import * as logic from '../src/index.js';

const nameGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (expression) => {
  if (expression < 2) {
    return false;
  }
  for (let result = 2; result < expression; result += 1) {
    if (expression % result === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const expression = logic.randomNum();
  const correctAnswer = (isPrime(expression) === true) ? 'yes' : 'no';
  return [expression, correctAnswer];
};

logic.gameLogic(nameGame, getGameData);

export default getGameData;
