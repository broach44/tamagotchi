import './eat.scss';
import utilities from '../../helpers/utilities';

const deductScore = () => {
  const progressBar = document.getElementById('myBar');
  let progressValue = progressBar.value;
  if (progressValue >= 5) {
    progressValue -= 5;
  } else {
    progressValue -= progressValue;
  }
  progressBar.setAttribute('value', progressValue);
  const domString = `Fullness = ${progressValue}`;
  utilities.printToDom('food-score', domString);
};

const foodTimer = () => {
  setInterval(deductScore, 500);
};

const cookieEvent = () => {
  const progressBar = document.getElementById('myBar');
  let progressValue = progressBar.value;
  if (progressValue >= 3) {
    progressValue -= 3;
  } else {
    progressValue -= progressValue;
  }
  progressBar.setAttribute('value', progressValue);
  const domString = `Fullness = ${progressValue}`;
  utilities.printToDom('food-score', domString);
};

const addCookieListener = () => {
  document.getElementById('cookie').addEventListener('click', cookieEvent);
};

const appleEvent = () => {
  const progressBar = document.getElementById('myBar');
  let progressValue = progressBar.value;
  if (progressValue <= 90) {
    progressValue += 10;
  } else {
    progressValue = progressValue + 100 - progressValue;
  }
  progressBar.setAttribute('value', progressValue);
  const domString = `Fullness = ${progressValue}`;
  utilities.printToDom('food-score', domString);
};

const addAppleListener = () => {
  document.getElementById('apple').addEventListener('click', appleEvent);
};

const eatPrinter = () => {
  const domString = `
  <h1>Eat</h1>
  <div id='barWrapper'>
  <progress id="myBar" min="0" max="100" value="100">Fullness</progress>
  <div id="food-score">Fullness = 100</div>
  </<div>
  <div id='foodButtons'>
  <button id='apple' class='food'>Apple</button>
  <button id='cookie' class='food'>Cookie</button>
  </div>
  `;
  utilities.printToDom('eat', domString);
  addAppleListener();
  addCookieListener();
};

export default { eatPrinter, foodTimer };
