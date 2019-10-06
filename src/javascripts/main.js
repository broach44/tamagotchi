import '../styles/main.scss';
import eat from './components/eat/eat';
import play from './components/play/play';
import fight from './components/fight/fight';
import sleep from './components/sleep/sleep';

const init = () => {
  eat.eatPrinter();
  eat.foodTimer();
  play.playPrinter();
  play.joyTimer();
  fight.fightPrinter();
  fight.strengthTimer();
  sleep.sleepPrinter();
  sleep.sleepTimer();
};

init();
