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
    const questionSubject = [];
    const operand1 = logic.randomNum();
    const operand2 = logic.randomNum();
    const operator = String(randomSign());
    const expression = `${operand1} ${operator} ${operand2}`;
    questionSubject.push(expression);
    if (operator === '+') {
      const answer = operand1 + operand2;
      questionSubject.push(String(answer));
    } else if (operator === '*') {
      const answer = operand1 * operand2;
      questionSubject.push(String(answer));
    } else {
      const answer = operand1 - operand2;
      questionSubject.push(String(answer));
    }
    return questionSubject;
  };

  logic.gameLogic(nameGame, taskSubject);
};