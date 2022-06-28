import * as logic from '../src/index.js';

export const calc = () => {
  
  const nameGame = 'What is the result of the expression?';
  
  const randomSign = () => {
    const coll = ['+', '-', '*'];
    const i = Math.floor(Math.random() * 3);
    const sign = coll[i];
    return sign;
  };

    const taskSubject = () => {
    const operand1 = logic.randomNum();
    const operand2 = logic.randomNum();
    const operator = String(randomSign());
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

  const task = () => {
    const result = [];
    const operand1 = logic.randomNum();
    const operand2 = logic.randomNum();
    const operator = String(randomSign());
    const temp = `${operand1} ${operator} ${operand2}`;
    result.push(temp);
    if (operator === '+') {
      const sum = operand1 + operand2;
      result.push(sum);
    } else if (operator === '*') {
      const mult = operand1 * operand2;
      result.push(mult);
    } else {
      const other = operand1 - operand2;
      result.push(other);
    }
    return result;
  };
  
  const expression = task[0];
  const rightAnswer = String(task[1]);

  logic.gameLogic(nameGame, expression, rightAnswer);
};