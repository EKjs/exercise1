document.addEventListener("DOMContentLoaded", () => {
  setTimeout(startCountdown, 10000);
});

function startCountdown() {
  document.getElementById("ad").style.display = "flex";
  document.getElementById("closeAd").addEventListener("click", closead);
}

function closead() {
  document.getElementById("ad").style.display = "none";
}
