import * as logic from '../index.js';

const nameGame = 'Find the greatest common divisor of given numbers.';

const getGCD = (number1, number2) => {
  if (number1 < number2) {
    let divisor = number1;
    while (number1 % divisor !== 0 || number2 % divisor !== 0) {
      divisor -= 1;
    }
    return divisor;
  }
  let divisor = number2;
  while (number1 % divisor !== 0 || number2 % divisor !== 0) {
    divisor -= 1;
  }
  return divisor;
};

const getGameData = () => {
  const number1 = logic.randomNum(1, 9);
  const number2 = logic.randomNum(1, 9);
  const expression = `${number1} ${number2}`;
  const correctAnswer = String(getGCD(number1, number2));
  return [expression, correctAnswer];
};

const runGcdGame = () => logic.gameLogic(nameGame, getGameData);

export default runGcdGame;
