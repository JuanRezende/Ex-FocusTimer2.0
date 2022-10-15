export default function Controls({
  btnPlay,
  btnPause,
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
}) {
  function play() {
    btnPause.classList.remove("hide");
    btnPlay.classList.add("hide");
  }

  function pause() {
    btnPause.classList.add("hide");
    btnPlay.classList.remove("hide");
  }

  function reset() {
    btnPause.classList.add("hide");
    btnPlay.classList.remove("hide");
  }

  function playForest() {
    btnForest.classList.add("active");
    btnRain.classList.remove("active");
    btnCoffee.classList.remove("active");
    btnFireplace.classList.remove("active");
  }

  function playRain() {
    btnRain.classList.add("active");
    btnForest.classList.remove("active");
    btnCoffee.classList.remove("active");
    btnFireplace.classList.remove("active");
  }

  function playCoffee() {
    btnCoffee.classList.add("active");
    btnForest.classList.remove("active");
    btnRain.classList.remove("active");
    btnFireplace.classList.remove("active");
  }

  function playFireplace() {
    btnFireplace.classList.add("active");
    btnForest.classList.remove("active");
    btnRain.classList.remove("active");
    btnCoffee.classList.remove("active");
  }

  function whiteMode() {
    btnSun.classList.remove("hide");
    btnMoon.classList.add("hide");

    body.classList.remove("dm-bg-color");

    for (let i = 0; i <= allTimerSpan.length; i++) {
      if (allTimerSpan[i]) allTimerSpan[i].classList.remove("dm-fc-primary");
    }

    for (let i = 0; i <= allIconControls.length; i++) {
      if (allIconControls[i])
        allIconControls[i].classList.remove("dm-fc-secondary");
    }

    for (let i = 0; i <= allIconSounds.length; i++) {
      if (allIconSounds[i])
        allIconSounds[i].classList.remove("dm-fc-secondary");
    }

    for (let i = 0; i <= allVolSounds.length; i++) {
      if (allVolSounds[i]) allVolSounds[i].classList.remove("dm-bg-btn");
    }

    for (let i = 0; i <= allBtnSounds.length; i++) {
      if (allBtnSounds[i]) allBtnSounds[i].classList.remove("dm-bg-btn");
    }
  }

  function darkMode() {
    btnMoon.classList.remove("hide");
    btnSun.classList.add("hide");

    body.classList.add("dm-bg-color");

    for (let i = 0; i <= allTimerSpan.length; i++) {
      if (allTimerSpan[i]) allTimerSpan[i].classList.add("dm-fc-primary");
    }

    for (let i = 0; i <= allIconControls.length; i++) {
      if (allIconControls[i])
        allIconControls[i].classList.add("dm-fc-secondary");
    }

    for (let i = 0; i <= allIconSounds.length; i++) {
      if (allIconSounds[i]) allIconSounds[i].classList.add("dm-fc-secondary");
    }

    for (let i = 0; i <= allVolSounds.length; i++) {
      if (allVolSounds[i]) allVolSounds[i].classList.add("dm-bg-vol");
    }

    for (let i = 0; i <= allBtnSounds.length; i++) {
      if (allBtnSounds[i]) allBtnSounds[i].classList.add("dm-bg-btn");
    }
  }

  return {
    play,
    pause,
    reset,
    playForest,
    playRain,
    playCoffee,
    playFireplace,
    whiteMode,
    darkMode,
  };
}
