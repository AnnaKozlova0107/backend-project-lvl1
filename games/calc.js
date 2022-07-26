import * as logic from '../src/index.js';

const nameGame = 'What is the result of the expression?';

const getRandomSign = () => {
  const coll = ['+', '-', '*'];
  const i = Math.floor(Math.random() * 3);
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
  const operand1 = logic.randomNum();
  const operand2 = logic.randomNum();
  const operator = String(getRandomSign());
  const question = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = String(makeCalculation(operand1, operand2, operator));
  return [question, correctAnswer];
};

logic.gameLogic(nameGame, getGameData);

export default getGameData;
