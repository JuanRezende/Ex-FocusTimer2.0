import {
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
} from "./elements.js";
import Controls from "./controls.js";
import Events from "./events.js";
import Timer from "./timer.js";
import Sound from "./sounds.js";

const sound = Sound();

const controls = Controls({
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
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

Events({ controls, timer, sound, allBtnSounds });
