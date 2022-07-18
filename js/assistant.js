const form1 = document.getElementById("form-1");
let btnNewIncident = document.getElementById("new-incident");
let btnNewDemande = document.getElementById("new-demande");
const btnCancelIncident = document.getElementById("cancelIncident");
const bg = document.getElementById("bgs2");

btnNewIncident.addEventListener("click", () => {
  soundPlay("sfxPolice.wav");
  btnNewDemande.classList.add("greyscale");
  form1.classList.add("animate__animated");
  form1.classList.add("animate__bounceInUp");
  form1.style.display = "flex";
});

btnCancelIncident.addEventListener("click", () => {
  soundPlay("sfxCancel.wav");
  btnNewDemande.classList.remove("greyscale");
  form1.classList.add("animate__bounceOutDown");

  setTimeout(function () {
    form1.style.display = "none";
    form1.classList.remove("animate__bounceOutDown");
  }, 600);
});

btnNewDemande.addEventListener("click", () => {
  soundPlay("sfxCat.wav");
  form2.style.display = "flex";
});
