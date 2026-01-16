const screens = document.querySelectorAll(".screen");

function showScreen(id) {
  screens.forEach(screen => screen.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function goToScreen(screenNum) {
  showScreen("screen" + screenNum);
}
