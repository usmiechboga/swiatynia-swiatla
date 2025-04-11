function openSeal() {
  window.location.href = "pieczec.html";
}
function playMantra() {
  const audio = new Audio("assets/mantra_aktywacyjna.wav");
  audio.loop = false;
  audio.play();
}
function enterMeditation() {
  document.body.style.background = "#110022";
  document.getElementById('portal').innerText = "🌌 Tryb Medytacji Aktywny...";
}
function openPDF() {
  window.open("dokumentacja/Sigillum_Lux_Novum.pdf", "_blank");
}