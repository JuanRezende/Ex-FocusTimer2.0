const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");

const btnPlay = document.querySelector(".play");
const btnPause = document.querySelector(".pause");
const btnStop = document.querySelector(".stop");
const btnSum = document.querySelector(".sum");
const btnSub = document.querySelector(".sub");

const btnForest = document.querySelector(".btn-forest");
const btnRain = document.querySelector(".btn-rain");
const btnCoffee = document.querySelector(".btn-coffee");
const btnFireplace = document.querySelector(".btn-fireplace");

const btnSun = document.querySelector(".btn-sun");
const btnMoon = document.querySelector(".btn-moon");

const body = document.querySelector("body");

const allTimerSpan = document.querySelectorAll("#timer span");
const allIconControls = document.querySelectorAll("#controls button svg path");
const allIconSounds = document.querySelectorAll(".col-2 button svg path");
const allVolSounds = document.querySelectorAll(".col-2 button .sound-vol");
const allBtnSounds = document.querySelectorAll(".col-2 button");

export {
  minutesDisplay,
  secondsDisplay,
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
  body,
  allTimerSpan,
  allIconControls,
  allIconSounds,
  allVolSounds,
  allBtnSounds,
};
