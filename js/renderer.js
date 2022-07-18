("use strict");
let content_id = 0;
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All APIs exposed by the context bridge is available here.

// Binds the buttons to the context bridge API.
document.getElementById("minimize").addEventListener("click", () => {
  soundPlay("sfxBtn.wav");
  soundPlay("sfxMinimize.wav");
  windowControls.minimize();
});

document.getElementById("maximize").addEventListener("click", () => {
  soundPlay("sfxBtn.wav");
  soundPlay("sfxMaximize.wav");
  windowControls.maximize();
});

document.getElementById("close").addEventListener("click", () => {
  soundPlay("sfxBtn.wav");
  alertify
    .confirm("Êtes-vous certain de vouloir quitter l'application ?")
    .set("movable", false)
    .set({ title: "Vous êtes sûr ?" })
    .set("labels", {
      ok:
        "<i style='margin-right:6px'class='fa-duotone fa-arrow-right-from-arc'></i>" +
        "Quitter",

      cancel:
        "<i style='margin-right:6px' class='fa-duotone fa-teddy-bear'></i>" +
        "Rester",
    })
    .set("closable", false)
    .set("onok", function (closeEvent) {
      soundPlay("sfxBtn.wav");
      soundPlay("sfxExit.wav");
      const exit = document.getElementById("exit");
      exit.style.display = "block";
      setTimeout(function () {
        windowControls.close();
      }, 3500);
    })

    .set("oncancel", function (closeEvent) {
      soundPlay("sfxStay.wav");
    });
});

document.getElementById("minimize2").addEventListener("click", () => {
  soundPlay("sfxBtn.wav");
  soundPlay("sfxMinimize.wav");
  windowControls.minimize();
});

document.getElementById("maximize2").addEventListener("click", () => {
  soundPlay("sfxMaximize.wav");
  windowControls.maximize();
});

document.getElementById("close2").addEventListener("click", () => {
  soundPlay("sfxBtn.wav");
  alertify
    .confirm("Êtes-vous certain de vouloir quitter l'application ?")
    .set("movable", false)
    .set({ title: "Vous êtes sûr ?" })
    .set("labels", {
      ok:
        "<i style='margin-right:6px'class='fa-duotone fa-arrow-right-from-arc'></i>" +
        "Quitter",

      cancel:
        "<i style='margin-right:6px' class='fa-duotone fa-teddy-bear'></i>" +
        "Rester",
    })
    .set("closable", false)
    .set("onok", function (closeEvent) {
      soundPlay("sfxExit.wav");
      soundPlay("sfxBtn.wav");
      const exit = document.getElementById("exit");
      exit.style.display = "block";
      exit.classList.add("param-dimmer");
      setTimeout(function () {
        exit.classList.remove("param-dimmer");
        windowControls.close();
      }, 3500);
    })

    .set("oncancel", function (closeEvent) {
      soundPlay("sfxStay.wav");
    });
});

document.getElementById("minimize3").addEventListener("click", () => {
  soundPlay("sfxBtn.wav");
  soundPlay("sfxMinimize.wav");
  windowControls.minimize();
});

document.getElementById("maximize3").addEventListener("click", () => {
  soundPlay("sfxBtn.wav");
  soundPlay("sfxMaximize.wav");
  windowControls.maximize();
});

document.getElementById("close3").addEventListener("click", () => {
  soundPlay("sfxBtn.wav");
  alertify
    .confirm("Êtes-vous certain de vouloir quitter l'application ?")
    .set("movable", false)
    .set({ title: "Vous êtes sûr ?" })
    .set("labels", {
      ok:
        "<i style='margin-right:6px'class='fa-duotone fa-arrow-right-from-arc'></i>" +
        "Quitter",

      cancel:
        "<i style='margin-right:6px' class='fa-duotone fa-teddy-bear'></i>" +
        "Rester",
    })
    .set("closable", false)
    .set("onok", function (closeEvent) {
      soundPlay("sfxBtn.wav");
      soundPlay("sfxExit.wav");
      const exit = document.getElementById("exit");
      exit.style.display = "block";
      setTimeout(function () {
        windowControls.close();
      }, 3500);
    })

    .set("oncancel", function (closeEvent) {
      soundPlay("sfxStay.wav");
    });
});

// PS PART
let consoleColor = "cDefault";

document
  .getElementById("buttons")
  .addEventListener("click", async function (event) {
    const file = event?.target?.attributes["data-psfile"]?.value;
    if (file) {
      let res = await window.electron.runPS(file);
      res = res
        .split("\n")
        .filter((e) => e != "\r")
        .filter((e) => e != null)
        .join("\n");

      const response = document.querySelector(".response");

      let div = document.createElement("div");
      div.id = `${content_id}-content`;
      div.classList.add("nombril");
      div.classList.add("animate__animated");
      div.classList.add("animate__bounceInLeft");

      div.style.whiteSpace = "pre-wrap";
      div.style.padding = "1rem";

      switch (consoleColor) {
        case "cDefault":
          div.style.color = "var(--theme-primary)";
          break;
        case "cGrey":
          div.style.color = "grey";
          break;
        case "cWhite":
          div.style.color = "white";
          break;
        case "cBlack":
          div.style.color = "black";
          break;
      }
      div.innerText = res;

      response.appendChild(div);

      div.addEventListener("click", () => {
        div.classList.remove("animate__bounceInLeft");
        div.classList.add("blink_me");

        setTimeout(() => {
          div.classList.remove("blink_me");
        }, 500);

        soundPlay("sfxNewForm.wav");

        alertify.set("notifier", "position", "bottom-center");
        const notification = alertify.notify(
          '<i class="fa-duotone fa-copy"></i>' + " Copié dans le presse-papier",
          "success",
          2
        );
      });

      const contextMenuResult = new window.VanillaContextMenu({
        scope: div,
        menuItems: [
          {
            label: "Copier le résultat",
            callback: (event) => {
              div.classList.remove("animate__bounceInLeft");
              div.classList.add("blink_me");

              setTimeout(() => {
                div.classList.remove("blink_me");
              }, 500);

              soundPlay("sfxNewForm.wav");

              alertify.set("notifier", "position", "bottom-center");
              const notification = alertify.notify(
                '<i class="fa-duotone fa-copy"></i>' +
                  " Copié dans le presse-papier",
                "success",
                2
              );
            },
          },
          {
            label: "Vider la console",
            callback: (event) => {
              if (document.querySelector(".response").textContent != ``) {
                soundPlay("sfxDeleteConsole.wav");
              }

              document
                .querySelector(".response")
                .classList.add("animate__flash");

              setTimeout(() => {
                document
                  .querySelector(".response")
                  .classList.remove("animate__flash");
                document.querySelector(".response").textContent = ``;
              }, 1000);
            },
          },
        ],
        customThemeClass: "custom-context-btn",
      });

      // document.querySelectorAll(".nombril").forEach((nombril) => {
      //   addEventListener("click", () => {
      //     console.log("test");
      //     soundPlay("sfxBtn2.wav");
      //   });
      // });
    }
  });
