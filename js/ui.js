("use strict");
/************
 *
 *  ✨ WELCOME MESSAGE
 *
 ************/
//* FUNCTIONS
// Message de bienvenue (avec délai de 5.2s pour fit avec le Splash)
setTimeout(function welcomeMessage() {
  window.showAlert = function welcomeMessage() {
    alertify
      .alert(
        " <i class='fa-duotone fa-newspaper fa-1x'></i>" +
          " " +
          '<a class="startLink" href="javascript:showNews();" style="color:grey; cursor: url(./assets/Images//cursors/Hand.cur), auto;">Nouveautés</a>' +
          "<br/><br/>" +
          "<i class='fa-brands fa-github fa-1'></i>" +
          " " +
          '<a class="startLink" href="https://github.com/Lunar94/Colombo-2" target="_blank" style="color:grey;  cursor: url(./assets/Images//cursors/Hand.cur), auto;">Lien du Github</a>' +
          "<br/><br/>" +
          "<i class='fa-duotone fa-circle-question fa-1x'></i>" +
          " " +
          '<a class="startLink" href="javascript:showNews();" style="color:grey;  cursor: url(./assets/Images//cursors/Hand.cur), auto;">Obtenir de l\'aide</a>' +
          "<br/>"
      )
      .set({ transition: "pulse" })
      .show()
      .set({ title: `Bienvenue sur COLOMBO ${buildMain}.` })
      .set({
        label:
          "<i class='fa-duotone fa-door-open' style='margin-right:5px;'></i>" +
          "Démarrer",
      })
      .set("movable", false)
      .set({ onshow: soundPlay("sfxNews.wav") });
  };
  window.showNews = function () {};
  window.showAlert();
}, 5200);

/************
 *
 *  🖥️ CONSOLE CAA
 *
 ************/
//* VARIABLES
const consoleGlow = document.getElementById("console-glow");
const moreButtonIcon = document.getElementById("btn-more-icon");
const btnAstuces = document.getElementById("btn-astuces");
const consoleCAA = document.getElementById("console");
const btnClear = document.getElementById("btn-clear");
const btnMore = document.getElementById("btn-more");
const theRoot = document.querySelector(":root");

//* FUNCTIONS
// Activation | Désactivation des Astuces
function toggleClass() {
  if (btnAstuces.classList.contains("astucesActivated")) {
    soundPlay("sfxBtn.wav");
    soundPlay("sfxAstuces2.ogg");
    btnAstuces.classList.remove("astucesActivated");
    btnAstuces.style.setProperty("margin-top", "-41px");
    theRoot.style.setProperty("--display-astuces", "none");
    theRoot.style.setProperty(
      "--current-cursor",
      "url(../../assets/Images//cursors/Hand.cur), auto"
    );
  } else {
    soundPlay("sfxAstuces.wav");
    soundPlay("sfxBtn.wav");
    btnAstuces.classList.add("astucesActivated");
    btnAstuces.style.setProperty("margin-top", "-64px");
    theRoot.style.setProperty("--display-astuces", "block");
    theRoot.style.setProperty(
      "--current-cursor",
      "url(../../assets/Images//cursors/Help.cur), auto"
    );
  }
}

// Élargissement de la console
function consoleEnlarge() {
  if (consoleCAA.style.height === "90%") {
    soundPlay("sfxConsoleMinimize.wav");
    consoleGlow.classList.remove("param-dimmer");
    consoleGlow.style.marginTop = "40px";
    //  consoleCAA.classList.add("animate__shakeY");
    setTimeout(() => {
      // consoleCAA.classList.remove("animate__shakeY");
    }, 500);
    consoleCAA.style.height = "400px";
    moreButtonIcon.classList.remove("fa-down-from-line");
    moreButtonIcon.classList.add("fa-expand");
    // moreButtonIcon.classList.add("fa-animate__shakeY");
  } else {
    soundPlay("sfxBtn.wav");
    soundPlay("sfxBottle.wav");
    soundPlay("sfxGong.wav");

    consoleGlow.classList.add("param-dimmer");

    consoleCAA.style.height = "90%";
    consoleGlow.style.marginTop = "0px";
    // consoleCAA.classList.add("animate__slideInUp");
    setTimeout(() => {
      // consoleCAA.classList.remove("animate__slideInUp");
    }, 1000);
    moreButtonIcon.classList.remove("fa-expand");
    moreButtonIcon.classList.add("fa-down-from-line");
  }
}

//* EVENTS LISTENERS
// Effet de suppression console
btnClear.addEventListener("click", () => {
  if (document.querySelector(".response").textContent != ``) {
    soundPlay("sfxDeleteConsole.wav");
  }
  document.querySelector(".response").classList.add("animate__flash");
  setTimeout(() => {
    document.querySelector(".response").classList.remove("animate__flash");
    document.querySelector(".response").textContent = ``;
  }, 1000);
});

// Élargissement de la console
btnMore.addEventListener("click", () => {
  consoleEnlarge();
  moreButtonIcon.classList.add("animate__rotateIn");
  setTimeout(function () {
    moreButtonIcon.classList.remove("animate__rotateIn");
  }, 800);
});

/***************
 *
 *  ⚙️ SETTINGS
 *
 ***************/
//* VARIABLES
const btnParam = document.getElementById("btn-param");
const paramPanel = document.getElementById("param");
const paramButtonIcon = document.getElementById("btn-param-icon");
const paramContainer = document.getElementById("param-container");
const root = document.querySelector(":root");
const nuanceDefault = document.getElementById("nuanceDefault");
const icons = document.querySelectorAll(".fa-4x");
const topbar = document.getElementById("topbar");
const tongue = document.getElementById("tongue");
const checkConsMax = document.getElementById("consoleMax");
const checkConfirmDelConsole = document.getElementById("confirmdelete");
// Contrôles boutons de fenêtres
const fermer = document.getElementById("close");
const agrandir = document.getElementById("maximize");
const reduire = document.getElementById("minimize");
const b1 = document.getElementById("topbar-1-demo");
const b2 = document.getElementById("topbar-2-demo");
const b3 = document.getElementById("topbar-3-demo");
const bStyle1 = document.getElementById("windowsBtnStyle1");
const bStyle2 = document.getElementById("windowsBtnStyle2");
const bStyle3 = document.getElementById("windowsBtnStyle3");
// Les nuances
let lastSelected = nuanceDefault;
const colors = {
  nuanceDefault: {
    primary: "#F78361",
    secondary: "#9C523C",
    icons: "white",
    littleButton: "#F78361",
  },
  nuance1: {
    primary: "#DF6C7F",
    secondary: "#944855",
    icons: "white",
    littleButton: "#DF6C7F",
  },
  nuance2: {
    primary: "#B06392",
    secondary: "#7D4868",
    icons: "white",
    littleButton: "#B06392",
  },
  nuance3: {
    primary: "#785F90",
    secondary: "#5D4B6F",
    icons: "white",
    littleButton: "white",
  },
  nuance4: {
    primary: "#485679",
    secondary: "#3F4B68",
    icons: "white",
    littleButton: "white",
  },
  nuance5: {
    primary: "#2F4858",
    secondary: "#596D79",
    icons: "white",
    littleButton: "white",
  },
  nuance6: {
    primary: "#1C6E7D",
    secondary: "#2798ad",
    icons: "white",
    littleButton: "white",
  },
  nuance7: {
    primary: "#039590",
    secondary: "#04c9c2",
    icons: "white",
    littleButton: "#039590",
  },
  nuance8: {
    primary: "#4BBC8E",
    secondary: "#378a68",
    icons: "white",
    littleButton: "#4BBC8E",
  },
  nuance9: {
    primary: "#9BDE7E",
    secondary: "#7bb063",
    icons: "#334b28",
    littleButton: "#7bb063",
  },
  nuance10: {
    primary: "#F9F871",
    secondary: "#bbba54",
    icons: "#4a4a20",
    littleButton: "#bbba54",
  },
};
// Couleurs du texte de la console
const nuanceConsoleDefault = document.getElementById("def");
const nuanceConsoleGrey = document.getElementById("grey");
const nuanceConsoleWhite = document.getElementById("white");
const nuanceConsoleBlack = document.getElementById("black");

//* EVENTS LISTENERS
// Petit bouton paramètres
btnParam.addEventListener("click", () => {
  paramContainer.classList.add("param-dimmer");
  soundPlay("sfxBtn.wav");
  soundPlay("sfxDrill.wav");
  paramButtonIcon.classList.add("animate__rotateIn");
  setTimeout(function () {
    paramButtonIcon.classList.remove("animate__rotateIn");
  }, 800);
  paramPanel.style.display = "block";
});

b1.addEventListener("click", () => {
  soundPlay("sfxAnvil.wav");
  b1.classList.add("topbar-1-demo-selected");
  b2.classList.remove("topbar-1-demo-selected");
  b3.classList.remove("topbar-1-demo-selected");
  bStyle1.style.display = "flex";
  bStyle2.style.display = "none";
  bStyle3.style.display = "none";
  btnParamClose1.style.display = "flex";
  btnParamClose2.style.display = "none";
  btnParamClose3.style.display = "none";
});

b2.addEventListener("click", () => {
  soundPlay("sfxAnvil.wav");
  b1.classList.remove("topbar-1-demo-selected");
  b2.classList.add("topbar-1-demo-selected");
  b3.classList.remove("topbar-1-demo-selected");
  bStyle1.style.display = "none";
  bStyle2.style.display = "flex";
  bStyle3.style.display = "none";
  btnParamClose1.style.display = "none";
  btnParamClose2.style.display = "flex";
  btnParamClose3.style.display = "none";
});

b3.addEventListener("click", () => {
  soundPlay("sfxAnvil.wav");
  b1.classList.remove("topbar-1-demo-selected");
  b2.classList.remove("topbar-1-demo-selected");
  b3.classList.add("topbar-1-demo-selected");
  bStyle1.style.display = "none";
  bStyle2.style.display = "none";
  bStyle3.style.display = "flex";
  btnParamClose1.style.display = "none";
  btnParamClose2.style.display = "none";
  btnParamClose3.style.display = "flex";
});

nuanceConsoleDefault.addEventListener("click", () => {
  soundPlay("sfxChirp.wav");
  consoleColor = "cDefault";
  nuanceConsoleDefault.classList.add("colorJS");
  nuanceConsoleGrey.classList.remove("colorJS");
  nuanceConsoleWhite.classList.remove("colorJS");
  nuanceConsoleBlack.classList.remove("colorJS");
  nuanceConsoleWhite.classList.remove("colorJS-white");
  //NC1
  consoleCAA.style.setProperty("color", "var(--theme-primary)");
});

nuanceConsoleGrey.addEventListener("click", () => {
  soundPlay("sfxChirp.wav");
  consoleColor = "cGrey";
  nuanceConsoleDefault.classList.remove("colorJS");
  nuanceConsoleGrey.classList.add("colorJS");
  nuanceConsoleWhite.classList.remove("colorJS");
  nuanceConsoleBlack.classList.remove("colorJS");
  nuanceConsoleWhite.classList.remove("colorJS-white");
  //NC2
  consoleCAA.style.setProperty("color", "grey");
});

nuanceConsoleWhite.addEventListener("click", () => {
  soundPlay("sfxChirp.wav");
  consoleColor = "cWhite";
  nuanceConsoleDefault.classList.remove("colorJS");
  nuanceConsoleGrey.classList.remove("colorJS");
  nuanceConsoleWhite.classList.add("colorJS-white");
  nuanceConsoleBlack.classList.remove("colorJS");
  //NC3
  consoleCAA.style.setProperty("color", "white");
});

nuanceConsoleBlack.addEventListener("click", () => {
  soundPlay("sfxChirp.wav");
  consoleColor = "cBlack";
  nuanceConsoleDefault.classList.remove("colorJS");
  nuanceConsoleGrey.classList.remove("colorJS");
  nuanceConsoleWhite.classList.remove("colorJS");
  nuanceConsoleBlack.classList.add("colorJS");
  nuanceConsoleWhite.classList.remove("colorJS-white");
  //NC4
  consoleCAA.style.setProperty("color", "black");
});

//* FUNCTIONS
// Checkbox pour le glowing
window.onload = function checkGlow() {
  checkGlow.onchange = function checkGlow() {
    if (checkGlow.checked == false) {
      topbar.style.animation = "none";
      tongue.style.animation = "none";
      wrapCons.style.animation = "none";
    } else {
      topbar.style.animation = "glow 5s infinite alternate";
      tongue.style.animation = "glow 5s infinite alternate";
      wrapCons.style.animation = "glow 5s infinite alternate";
    }
  };
};

// Checkbox pour la confirmation avant suppression de la console
window.onload = function checkDelConsole() {
  checkConfirmDelConsole.onchange = function checkDelConsole() {
    if (checkConfirmDelConsole.checked == false) {
      let confirmDeleteConsoleSwitch = 0;
    } else {
      let confirmDeleteConsoleSwitch = 1;
    }
  };
};

// Sélecteur de nuances
document.getElementById("colors-container").addEventListener("click", (ev) => {
  if (ev.target.id == "colors-container") return;
  soundPlay("sfxChirp.wav");
  lastSelected.classList.remove("colorJS");
  ev.target.classList.add("colorJS");
  lastSelected = ev.target;
  root.style.setProperty("--theme-primary", colors[ev.target.id].primary);
  root.style.setProperty("--theme-secondary", colors[ev.target.id].secondary);
  root.style.setProperty("--theme-icons", colors[ev.target.id].icons);
  root.style.setProperty(
    "--selection-color",
    colors[ev.target.id].littleButton
  );
  root.style.setProperty(
    "--theme-little-button",
    colors[ev.target.id].littleButton
  );
});

/***************
 *
 *  🔘 MAIN BUTTONS
 *
 ***************/
//* VARIABLES
const btnMain = document.querySelectorAll(".btn");

//* EVENTS LISTENERS
btnMain.forEach((btnMain) => {
  btnMain.addEventListener("click", () => {
    soundPlay("sfxClick.wav");
    btnMain.classList.add("animate__animated");
    btnMain.classList.add("animate__heartBeat");
    btnMain.classList.remove("hovertext");
    setTimeout(function () {
      btnMain.classList.remove("animate__animated");
      btnMain.classList.remove("animate__heartBeat");
      btnMain.classList.add("hovertext");
    }, 300);
  });
});

/***************
 *
 *  🧭 SETTINGS NAVIGATION
 *
 ***************/
//* VARIABLES
//Navigation (Panneau de gauche et le bouton fermer en haut à droite)
const btnConsole = document.getElementById("console-section");
const btnAssistant = document.getElementById("assistant-section");
const btnTheme = document.getElementById("theme-section");
const btnUpdate = document.getElementById("update-section");
const btnCredits = document.getElementById("credits-section");
const btnParamClose1 = document.getElementById("param-close1");
const btnParamClose2 = document.getElementById("param-close2");
const btnParamClose3 = document.getElementById("param-close3");
// Les sections à droite (le contenu dans les paramètres en gros)
const consoleDisplay = document.getElementById("param-console-content");
const assistantDisplay = document.getElementById("param-assistant-content");
const themeDisplay = document.getElementById("param-theme-content");
const updateDisplay = document.getElementById("param-update-content");
const creditsDisplay = document.getElementById("param-credits-content");

//* EVENTS LISTENERS
btnParamClose1.addEventListener("click", () => {
  snd18.pause();
  snd18.currentTime = 0;
  paramPanel.classList.add("animate__zoomOut");
  paramContainer.classList.remove("param-dimmer");
  setTimeout(function () {
    paramPanel.style.display = "none";
    paramPanel.classList.remove("animate__zoomOut");
  }, 400);
  soundPlay("sfxBtn2.wav");
});

btnParamClose2.addEventListener("click", () => {
  snd18.pause();
  snd18.currentTime = 0;
  paramPanel.classList.add("animate__zoomOut");
  paramContainer.classList.remove("param-dimmer");
  setTimeout(function () {
    paramPanel.style.display = "none";
    paramPanel.classList.remove("animate__zoomOut");
  }, 400);
  soundPlay("sfxBtn2.wav");
});

btnParamClose3.addEventListener("click", () => {
  snd18.pause();
  snd18.currentTime = 0;
  paramPanel.classList.add("animate__zoomOut");
  paramContainer.classList.remove("param-dimmer");
  setTimeout(function () {
    paramPanel.style.display = "none";
    paramPanel.classList.remove("animate__zoomOut");
  }, 400);
  soundPlay("sfxBtn2.wav");
});

btnConsole.addEventListener("click", () => {
  snd18.pause();
  snd18.currentTime = 0;
  soundPlay("sfxBtn.wav");
  btnConsole.classList.add("param-section-activated");
  btnAssistant.classList.remove("param-section-activated");
  btnTheme.classList.remove("param-section-activated");
  btnUpdate.classList.remove("param-section-activated");
  btnCredits.classList.remove("param-section-activated");
  consoleDisplay.classList.add("animate__fadeIn");
  setTimeout(function () {
    consoleDisplay.classList.remove("animate__fadeIn");
  }, 1000);
  consoleDisplay.style.display = "block";
  assistantDisplay.style.display = "none";
  themeDisplay.style.display = "none";
  updateDisplay.style.display = "none";
  creditsDisplay.style.display = "none";
});

btnAssistant.addEventListener("click", () => {
  snd18.pause();
  snd18.currentTime = 0;
  soundPlay("sfxBtn.wav");
  btnConsole.classList.remove("param-section-activated");
  btnAssistant.classList.add("param-section-activated");
  btnTheme.classList.remove("param-section-activated");
  btnUpdate.classList.remove("param-section-activated");
  btnCredits.classList.remove("param-section-activated");
  consoleDisplay.style.display = "none";
  assistantDisplay.classList.add("animate__fadeIn");
  setTimeout(function () {
    assistantDisplay.classList.remove("animate__fadeIn");
  }, 1000);
  assistantDisplay.style.display = "block";
  themeDisplay.style.display = "none";
  updateDisplay.style.display = "none";
  creditsDisplay.style.display = "none";
});

btnTheme.addEventListener("click", () => {
  snd18.pause();
  snd18.currentTime = 0;
  soundPlay("sfxBtn.wav");
  btnConsole.classList.remove("param-section-activated");
  btnAssistant.classList.remove("param-section-activated");
  btnTheme.classList.add("param-section-activated");
  btnUpdate.classList.remove("param-section-activated");
  btnCredits.classList.remove("param-section-activated");
  consoleDisplay.style.display = "none";
  assistantDisplay.style.display = "none";
  themeDisplay.classList.add("animate__fadeIn");
  setTimeout(function () {
    themeDisplay.classList.remove("animate__fadeIn");
  }, 1000);
  themeDisplay.style.display = "block";
  updateDisplay.style.display = "none";
  creditsDisplay.style.display = "none";
});

btnUpdate.addEventListener("click", () => {
  snd18.pause();
  snd18.currentTime = 0;
  soundPlay("sfxBtn.wav");
  btnConsole.classList.remove("param-section-activated");
  btnAssistant.classList.remove("param-section-activated");
  btnTheme.classList.remove("param-section-activated");
  btnUpdate.classList.add("param-section-activated");
  btnCredits.classList.remove("param-section-activated");
  consoleDisplay.style.display = "none";
  assistantDisplay.style.display = "none";
  themeDisplay.style.display = "none";
  updateDisplay.classList.add("animate__fadeIn");
  setTimeout(function () {
    updateDisplay.classList.remove("animate__fadeIn");
  }, 1000);
  updateDisplay.style.display = "block";
  creditsDisplay.style.display = "none";
});

btnCredits.addEventListener("click", () => {
  soundPlay("sfxBtn.wav");
  snd18.play();
  btnConsole.classList.remove("param-section-activated");
  btnAssistant.classList.remove("param-section-activated");
  btnTheme.classList.remove("param-section-activated");
  btnUpdate.classList.remove("param-section-activated");
  btnCredits.classList.add("param-section-activated");
  consoleDisplay.style.display = "none";
  assistantDisplay.style.display = "none";
  themeDisplay.style.display = "none";
  updateDisplay.style.display = "none";
  creditsDisplay.classList.add("animate__fadeIn");
  setTimeout(function () {
    creditsDisplay.classList.remove("animate__fadeIn");
  }, 1000);
  creditsDisplay.style.display = "block";
});

/***************
 *
 *  👉️ CUSTOM THEME SELECTOR - From https://www.w3schools.com/howto/howto_custom_select.asp)
 *
 ***************/
//* VARIABLES
var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;

//* EVENTS LISTENERS
document.addEventListener("click", closeAllSelect);

//* LOOPS
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /* When an item is clicked, update the original select box,
        and the selected item: */
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

//* FUNCTIONS
function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.querySelectorAll(".btn").forEach((element) => {
  const contextMenuBtn = new window.VanillaContextMenu({
    scope: element,
    menuItems: [
      {
        label: "Assigner un raccourcis",
        callback: (event) => {
          // PLACER QUOI FAIRE ICI
          console.log(event);
        },
      },
      {
        label: "Déplacer",
        callback: (event) => {
          document.querySelectorAll(".btn").forEach((element) => {});
          console.log(event);
        },
      },
    ],
    customThemeClass: "custom-context-btn",
  });
});

const contextMenuConsole = new window.VanillaContextMenu({
  scope: document.getElementById("inner-console"),
  menuItems: [
    {
      label: "Vider la console",
      callback: (event) => {
        if (document.querySelector(".response").textContent != ``) {
          soundPlay("sfxDeleteConsole.wav");
        }
        document.querySelector(".response").classList.add("animate__flash");
        setTimeout(() => {
          document
            .querySelector(".response")
            .classList.remove("animate__flash");
          document.querySelector(".response").textContent = ``;
        }, 1000);
      },
    },
  ],
  customThemeClass: "custom-context-btn-alone",
});

/***************
 *
 *  📏 SIZE DETECTOR (Temporary)
 *
 ***************/
// //* VARIABLES
// let grandeur = window.matchMedia("(max-width: 600px)");
// //* FUNCTIONS
// function sizeDetector(grandeur) {
//   if (grandeur.matches) {
//     document.body.style.backgroundColor = "yellow";
//     console.log("YELLOW");
//   } else {
//     document.body.style.backgroundColor = "pink";
//     console.log("PINK");
//   }
// }

// sizeDetector(grandeur);
// grandeur.addListener(sizeDetector);
