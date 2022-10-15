import {
  btnPlay,
  btnPause,
  btnStop,
  btnSum,
  btnSub,
  btnForest,
  btnRain,
  btnCoffee,
  btnFireplace,
  btnSun,
  btnMoon,
} from "./elements.js";

export default function Events({ controls, timer, sound, allBtnSounds }) {
  btnPlay.onclick = () => {
    controls.play();
    timer.countdown();
    sound.pressButton();
  };

  btnPause.onclick = () => {
    controls.pause();
    timer.hold();
    sound.pressButton();
  };

  btnStop.onclick = () => {
    controls.reset();
    timer.reset();
    sound.pressButton();
  };

  btnSum.onclick = () => {
    timer.addFiveMinutes();
    sound.pressButton();
  };

  btnSub.onclick = () => {
    timer.removeFiveMinutes();
    sound.pressButton();
  };

  btnForest.onclick = () => {
    controls.playForest();
    sound.playForest();

    sound.pauseRain();
    sound.pauseCoffee();
    sound.pauseFireplace();
  };

  btnRain.onclick = () => {
    controls.playRain();
    sound.playRain();

    sound.pauseForest();
    sound.pauseCoffee();
    sound.pauseFireplace();
  };

  btnCoffee.onclick = () => {
    controls.playCoffee();
    sound.playCoffee();

    sound.pauseForest();
    sound.pauseRain();
    sound.pauseFireplace();
  };

  btnFireplace.onclick = () => {
    controls.playFireplace();
    sound.playFireplace();

    sound.pauseForest();
    sound.pauseRain();
    sound.pauseCoffee();
  };

  btnSun.onclick = () => {
    controls.darkMode();
  };

  btnMoon.onclick = () => {
    controls.whiteMode();
  };

  allBtnSounds.forEach((btn, index) => {
    let input = btn.querySelector("input");

    input.oninput = () => {
      sound.setVolume(input.value, index);
    };

    input.onchange = () => {
      sound.setVolume(input.value, index);
    };
  });
}
