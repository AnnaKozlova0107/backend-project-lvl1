import * as logic from '../src/index.js';

export const prime = () => {
  
    // Task description
    const nameGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
    
    // game details
    const taskSubject = () => {
       const questionSubject = [];
       const expression = logic.randomNum();
       questionSubject.push(expression);
       const isPrime = () => {
           if (expression < 2) {
            return false;
           }
            for (let result = 2; result < expression; result += 1) {
                if (expression % result === 0) {
                  return false;
                }
            }
          return true;  
        }
       
       const answer = isPrime(expression) ? 'yes' : 'no';
       questionSubject.push(answer);

               
        return questionSubject;
    };
      
    // game logic from gameLogic
     logic.gameLogic(nameGame, taskSubject);
  };
  