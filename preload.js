// preload.js

// All the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const ipcRenderer = require("electron").ipcRenderer;

ipcRenderer.on("player-play-toggle", () => {
  const videoElement = document.querySelector("video");

  if (videoElement) {
    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  }
});

ipcRenderer.on("media-previous-track", () => {
  const previousButton = document.querySelector(".previous-button");

  if (previousButton) {
    previousButton.click();
  }
});

ipcRenderer.on("media-next-track", () => {
  const nextButton = document.querySelector(".next-button");

  if (nextButton) {
    nextButton.click();
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const dependency of ["chrome", "node", "electron"]) {
    replaceText(`${dependency}-version`, process.versions[dependency]);
  }
});
