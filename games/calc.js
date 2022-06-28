import * as logic from '../src/index.js';

export const calc = () => {
  const nameGame = 'What is the result of the expression?';
  const randomSign = () => {
    const coll = ['+', '-', '*'];
    const i = Math.floor(Math.random() * 3);
    const sign = coll[i];
    return sign;
  };

  const operand1 = logic.randomNum();
  const operand2 = logic.randomNum();
  const operator = String(randomSign());

  const taskSubject = () => {
       return `${operand1} ${operator} ${operand2}`;
  };

  const correctAnswer = (operand1, operand2, operator) => {
    if (operator === '+') {
      return (operand1 + operand2);
    } else if (operator === '*') {
      return (operand1 * operand2);
    } else {
      return (operand1 - operand2);
    }
  }

  const rightAnswer = correctAnswer(operand1, operand2, operator);

  logic.gameLogic(nameGame, taskSubject, rightAnswer);
};