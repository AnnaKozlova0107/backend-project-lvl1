import * as logic from '../index.js';

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
  const expression = logic.randomNum(1, 9);
  const correctAnswer = (isPrime(expression) === true) ? 'yes' : 'no';
  return [expression, correctAnswer];
};

const runPrimeGame = () => logic.gameLogic(nameGame, getGameData);

export default runPrimeGame;
