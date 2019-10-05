import './sleep.scss';
import utilities from '../../helpers/utilities';

let score = 50;

const napEvent = () => {
  if (score <= 50) {
    score += 50;
  } else {
    score += 100 - score;
  }
  const domString = `
  <div id='sleepBar'>Energy Score = ${score}</div>
  `;
  utilities.printToDom('sleepBar', domString);
};

const addNapListener = () => {
  document.getElementById('nap').addEventListener('click', napEvent);
};

const sleepEvent = () => {
  if (score <= 40) {
    score += 60;
  } else {
    score += 100 - score;
  }
  const domString = `
  <div id='sleepBar'>Energy Score = ${score}</div>
  `;
  utilities.printToDom('sleepBar', domString);
};

const addSleepButtonListener = () => {
  document.getElementById('slumber').addEventListener('click', sleepEvent);
};

const sleepPrinter = () => {
  const domString = `
  <h1>Sleep</h1>
  <div id='barWrapper'>
  <div id='sleepBar'>Energy Score = 50</div>
  </div>
  <div id="sleepButtons">
  <button id='nap' class='sleepButtons'>Cat Nap</button>
  <button id='slumber' class='sleepButtons'>Slumber</button>
  </div>
  `;
  utilities.printToDom('sleep', domString);
  addSleepButtonListener();
  addNapListener();
};

export default { sleepPrinter };
