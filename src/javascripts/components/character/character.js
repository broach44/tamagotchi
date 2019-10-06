import utilities from '../../helpers/utilities';
import play from '../play/play';
import sleep from '../sleep/sleep';
import eat from '../eat/eat';
import fight from '../fight/fight';

import './character.scss';

let position = 256;

const animateScript = () => {
  document.getElementById('image-dog').style.backgroundPosition = `-${position}px 0px`;
  if (position < 1280) {
    position += 256;
  } else {
    position = 256;
  }
  return position;
};

setInterval(animateScript, 150);

const characterPrinter = () => {
  const domString = `
  <h1>Ghost</h1>
  <progress id="char-progress" min="0" max="100" value="100">Character progres</progress>
  <p id="image-dog"></p>
  `;
  utilities.printToDom('pet', domString);
};

const averageScores = () => {
  const joyScore = play.getPlayScore();
  const sleepScore = sleep.getSleepScore();
  const eatScore = eat.getEatScore();
  const strengthScore = fight.getStrengthScore();
  const totalScore = joyScore + sleepScore + eatScore + strengthScore;
  const averageScore = totalScore / 4;
  const charProgressBar = document.getElementById('char-progress');
  charProgressBar.setAttribute('value', averageScore);
  if (averageScore <= 0) {
    const domString = `
    <h1 id="deadDog">You killed Ghost!</h1>
    <p id="skull"><p>
    `;
    utilities.printToDom('progress', domString);
    const domString2 = `
    `;
    utilities.printToDom('pet', domString2);
  }
};

const averageTimer = () => {
  setInterval(averageScores, 100);
};

export default { characterPrinter, averageTimer };
