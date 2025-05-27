// Load 50 songs dynamically
const songContainer = document.getElementById("songContainer");
songContainer.classList.add("song-list"); // Add the grid layout class

for (let i = 1; i <= 50; i++) {
  const songBox = document.createElement("div");
  songBox.classList.add("song-box");

  const image = document.createElement("img");
  image.src = `assets/images/song${i}.jpg`;
  image.alt = `Song ${i} Cover`;
  image.style.width = "100%";
  image.style.borderRadius = "10px";

  const title = document.createElement("p");
  title.textContent = `Song ${i}`;

  const audio = document.createElement("audio");
  audio.controls = true;
  audio.src = `assets/songs/song${i}.mp3`;
  audio.style.width = "100%";

  songBox.appendChild(image);
  songBox.appendChild(title);
  songBox.appendChild(audio);

  songContainer.appendChild(songBox);
}

// Theme toggle logic
function toggleTheme() {
  const body = document.getElementById("main-body");
  const isDark = body.classList.toggle("dark-mode");
  body.style.backgroundImage = isDark
    ? "url('assets/images/dark-bg.png')"
    : "url('assets/images/light-bg.jpeg')";
}

// Set default background on page load
window.onload = function () {
  const body = document.getElementById("main-body");
  body.style.backgroundImage = "url('assets/images/light-bg.jpeg')";
};

// Volume slider
const volumeSlider = document.getElementById("volume");
volumeSlider.addEventListener("input", function () {
  const audios = document.querySelectorAll("audio");
  audios.forEach(audio => {
    audio.volume = this.value;
  });
});
