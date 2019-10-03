import '../../styles/eat.scss';
import utilities from '../helpers/utilities';

let score = 100;

const cookieEvent = () => {
  if (score >= 3) {
    score -= 3;
  } else {
    score -= score;
  }
  const domString = `
  <div id='myBar'>Fullness Score = ${score}</div>
  `;
  utilities.printToDom('myBar', domString);
};

const addCookieListener = () => {
  document.getElementById('cookie').addEventListener('click', cookieEvent);
};

const appleEvent = () => {
  if (score <= 90) {
    score += 10;
  } else {
    score = score + 100 - score;
  }
  const domString = `
  <div id='myBar'>Fullness Score = ${score}</div>
  `;
  utilities.printToDom('myBar', domString);
};

const addAppleListener = () => {
  document.getElementById('apple').addEventListener('click', appleEvent);
};

const eatPrinter = () => {
  const domString = `
  <h1>Eat</h1>
  <div id='barWrapper'>
  <div id='myBar'>Fullness Score = 100</div>
  </div>
  <div id='foodButtons'>
  <button id='apple' class='food'>Apple</button>
  <button id='cookie' class='food'>Cookie</button>
  </div>
  `;
  utilities.printToDom('eat', domString);
  addAppleListener();
  addCookieListener();
};

export default { eatPrinter };
