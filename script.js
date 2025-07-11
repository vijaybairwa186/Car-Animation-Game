const audio = new Audio("sound.mp3");
audio.loop = true;
audio.volume = 0.5;

window.addEventListener(
  "click",
  () => {
    audio
      .play()
      .then(() => console.log("Music started"))
      .catch((e) => {
        console.warn("Autoplay blocked. Click again to start audio.");
      });
  },
  { once: true }
);

let carLeftPercent = 50;
const carWrapper = document.getElementById("carWrapper");

document.addEventListener("keydown", (e) => {
  const step = 5;
  if (e.key === "ArrowLeft") {
    carLeftPercent = Math.max(0, carLeftPercent - step);
  } else if (e.key === "ArrowRight") {
    carLeftPercent = Math.min(90, carLeftPercent + step);
  }

  carWrapper.style.left = `${carLeftPercent}%`;
});

const sky = document.getElementById("sky");
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  const isDarkMode = sky.classList.toggle("dark");
  sky.classList.toggle("light", !isDarkMode);

  themeToggle.innerText = isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
});
