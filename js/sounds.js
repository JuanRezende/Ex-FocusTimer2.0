export default function () {
  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  );
  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );

  const btnForest = new Audio("./assets/sounds/Floresta.wav");
  btnForest.volume = 0.2;

  const btnRain = new Audio("./assets/sounds/Chuva.wav");
  btnRain.volume = 0.2;

  const btnCoffee = new Audio("./assets/sounds/Cafeteria.wav");
  btnCoffee.volume = 0.2;

  const btnFireplace = new Audio("./assets/sounds/Lareira.wav");
  btnFireplace.volume = 0.2;

  function pressButton() {
    buttonPressAudio.play();
  }

  function timeEnd() {
    kitchenTimer.play();
  }

  function playForest() {
    btnForest.play();
  }

  function pauseForest() {
    btnForest.pause();
  }

  function playRain() {
    btnRain.play();
  }

  function pauseRain() {
    btnRain.pause();
  }

  function playCoffee() {
    btnCoffee.play();
  }

  function pauseCoffee() {
    btnCoffee.pause();
  }

  function playFireplace() {
    btnFireplace.play();
  }

  function pauseFireplace() {
    btnFireplace.pause();
  }

  function setVolume(value, index) {
    let audio = [btnForest, btnRain, btnCoffee, btnFireplace];

    audio[index].volume = value / 100;
  }

  btnForest.loop = true;
  btnRain.loop = true;
  btnCoffee.loop = true;
  btnFireplace.loop = true;

  return {
    pressButton,
    timeEnd,
    playForest,
    pauseForest,
    playRain,
    pauseRain,
    playCoffee,
    pauseCoffee,
    playFireplace,
    pauseFireplace,
    setVolume,
  };
}
