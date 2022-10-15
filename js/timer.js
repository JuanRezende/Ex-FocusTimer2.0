import Sounds from "./sounds.js";

const sound = Sounds();

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}) {
  let timerTimeOut;
  let minutes = Number(minutesDisplay.textContent);

  function updateDisplay(minutes, seconds) {
    minutes = minutes === undefined ? 0 : minutes;
    seconds = seconds === undefined ? 0 : seconds;
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function reset() {
    updateDisplay(minutes, 0);
    clearTimeout(timerTimeOut);
  }

  function countdown() {
    timerTimeOut = setTimeout(() => {
      let minutes = Number(minutesDisplay.textContent);
      let seconds = Number(secondsDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <= 0;

      updateDisplay(minutes, 0);

      if (isFinished) {
        resetControls();
        updateDisplay();
        sound.timeEnd();
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateDisplay(minutes, String(seconds - 1));

      countdown();
    }, 1000);
  }

  function hold() {
    clearTimeout(timerTimeOut);
  }

  function addFiveMinutes() {
    let minutes = Number(minutesDisplay.textContent);

    if (minutes >= 59) {
      return;
    }
    return (minutesDisplay.textContent = String(minutes + 5).padStart(2, "0"));
  }

  function removeFiveMinutes() {
    let minutes = Number(minutesDisplay.textContent);

    if (minutes <= 5) {
      return;
    }

    return (minutesDisplay.textContent = String(minutes - 5).padStart(2, "0"));
  }

  return {
    updateDisplay,
    reset,
    countdown,
    hold,
    addFiveMinutes,
    removeFiveMinutes,
  };
}
