import * as logic from '../index.js';

const nameGame = 'What is the result of the expression?';
const getRandomSign = () => {
  const coll = ['+', '-', '*'];
  const i = logic.randomNum(0, 2);
  const sign = coll[i];
  return sign;
};
const makeCalculation = (operand1, operand2, operator) => {
  if (operator === '+') {
    const answer = operand1 + operand2;
    return answer;
  } if (operator === '*') {
    const answer = operand1 * operand2;
    return answer;
  } if (operator === '-') {
    const answer = operand1 - operand2;
    return answer;
  } return null;
};
const getGameData = () => {
  const operand1 = logic.randomNum(0, 9);
  const operand2 = logic.randomNum(0, 9);
  const operator = String(getRandomSign());
  const question = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = String(makeCalculation(operand1, operand2, operator));
  return [question, correctAnswer];
};

const runCalcGame = () => logic.gameLogic(nameGame, getGameData);

export default runCalcGame;
