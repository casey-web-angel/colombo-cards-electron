/***************;
 *
 *  🔊 HOME MADE SOUND ENGINE
 *
 ***************/

//* VARIABLES
const prev = document.querySelector(".swiper-button-prev");
const next = document.querySelector(".swiper-button-next");
const switches = document.querySelectorAll(".cb");
const soundSwitch = document.getElementById("toggleSounds");
let snd18 = new Audio();
let src18 = document.createElement("source");
let snd19 = new Audio();
let src19 = document.createElement("source");
let muted = false;

//* FUNCTIONS
function soundPlay(sound) {
  if (muted) return;
  const audio = new Audio();
  const source = document.createElement("source");
  source.src = `./assets/sounds/${sound}`;
  audio.appendChild(source);

  audio.play();
  audio.addEventListener("ended", () => {
    audio.remove();
  });
}

function cashOut() {
  setTimeout(() => {
    soundPlay("sfxCash.wav");
  }, 300);
}

function sfxDeleteConsole() {
  sfxDeleteConsole.play();
  soundPlay("sfxBtn.wav");
}

//* EVENTS LISTENERS
soundSwitch.addEventListener("click", () => {
  if (muted) {
    muted = false;
    soundPlay("sfxClick.wav");
  } else {
    soundPlay("sfxClick.wav");
    soundPlay("sfxShhh.wav");
    muted = true;
  }
});

prev.addEventListener("click", () => {
  soundPlay("sfxChangePage.wav");
  soundPlay("sfxBtn.wav");
});

next.addEventListener("click", () => {
  soundPlay("sfxChangePage.wav");
  soundPlay("sfxBtn.wav");
});

//* SWITCHES
switches.forEach((xSwitch) => {
  xSwitch.addEventListener("click", () => {
    if (xSwitch.checked) {
      soundPlay("sfxSwitch.wav");
    } else {
      soundPlay("sfxSwitch2.wav");
    }
  });
});

src18.src = "./assets/sounds/sfxCredits.mp3";
snd18.loop = true;
snd18.appendChild(src18);
src19.src = "./assets/sounds/sfxShhh.wav";
snd19.appendChild(src19);
