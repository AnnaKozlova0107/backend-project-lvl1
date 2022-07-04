import * as logic from '../src/index.js';

export const progression = () => {
  
  // Task description
  const nameGame = 'What number is missing in the progression?';
  
  // game details
  const taskSubject = () => {
     const questionSubject = [];
      const questionSubjectExpression = [];
      let index = logic.randomNum();
      const i = logic.randomNum();
      questionSubjectExpression.push(index);
      let j = 1;
      while (j < 10) {
          index += i;
          questionSubjectExpression.push(index);
          j += 1;
        }
      const randomIndex = logic.randomNum();
      const temp = questionSubjectExpression[randomIndex];
      questionSubjectExpression[randomIndex] = '..';
      const str = questionSubjectExpression.join(' ');
      questionSubject.push(str);
      questionSubject.push(String(temp));
      return questionSubject;
    };
    
  // game logic from gameLogic
   logic.gameLogic(nameGame, taskSubject);
};