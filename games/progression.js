import * as logic from '../src/index.js';

const nameGame = 'What number is missing in the progression?';

const getProgression = () => {
  const progressionArray = []; // создаем пустой массив под прогрессию
  let index = logic.randomNum(); // определяем случайным образом начало прогрессии
  progressionArray.push(index); // добавляем первое число в массив прогрессии
  const stepProgression = logic.randomNum(); // определяем шаг прогрессии
  let progressionLength = 1;
  while (progressionLength < 10) {
    index += stepProgression;
    progressionArray.push(index);
    progressionLength += 1;
  }
  return progressionArray;
};

const getGameData = () => {
  const gameData = []; // создаем пустой массив
  const randomIndex = logic.randomNum(); // случайный образом задаем missing number
  const progression = getProgression(); // формируем прогрессию через get progression
  const temp = progression[randomIndex];
  progression[randomIndex] = '..';
  const str = progression.join(' ');
  gameData.push(str);
  gameData.push(String(temp));
  return gameData;
};
logic.gameLogic(nameGame, getGameData);

export default getGameData;
