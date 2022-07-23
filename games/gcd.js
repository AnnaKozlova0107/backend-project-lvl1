import * as logic from '../src/index.js';

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
  const number1 = logic.randomNum();
  const number2 = logic.randomNum();
  const expression = `${number1} ${number2}`;
  const correctAnswer = String(getGCD(number1, number2));
  return [expression, correctAnswer];
};

logic.gameLogic(nameGame, getGameData);

export default getGameData;
