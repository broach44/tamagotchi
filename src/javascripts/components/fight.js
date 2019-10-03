import '../../styles/fight.scss';
import utilities from '../helpers/utilities';

let score = 100;

const runAwayEvent = () => {
  if (score <= 99) {
    score += 1;
  }
  const domString = `
  <div id='fightBar'>Strength Score = ${score}</div>
  `;
  utilities.printToDom('fightBar', domString);
};

const addRunAwayListener = () => {
  document.getElementById('runAway').addEventListener('click', runAwayEvent);
};

const fightEvent = () => {
  if (score >= 10) {
    score -= 10;
  } else {
    score -= score;
  }
  const domString = `
  <div id='fightBar'>Strength Score = ${score}</div>
  `;
  utilities.printToDom('fightBar', domString);
};

const addFightButtonListener = () => {
  document.getElementById('fightSomething').addEventListener('click', fightEvent);
};

const fightPrinter = () => {
  const domString = `
  <h1>Fight</h1>
  <div id='barWrapper'>
  <div id='fightBar'>Strength Score = 100</div>
  </div>
  <div id="fightButtons">
  <button id='runAway' class='fightButtons'>Bravely Run</button>
  <button id='fightSomething' class='fightButtons'>Fight</button>
  </div>
  `;
  utilities.printToDom('fight', domString);
  addFightButtonListener();
  addRunAwayListener();
};

export default { fightPrinter };
