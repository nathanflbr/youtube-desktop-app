const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + "/assets/icons/icon.png",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  mainWindow.loadURL("https://music.youtube.com/");

  const addedBtn = mainWindow.setThumbarButtons([
    {
      tooltip: "Previous Track",
      icon: path.join(__dirname, "assets/icons/skip_previous.png"),
      click: () => {
        mainWindow.webContents.send("media-previous-track");
      },
    },
    {
      tooltip: "Play/Pause",
      icon: path.join(__dirname, "assets/icons/play_arrow.png"),
      click() {
        mainWindow.webContents.send("player-play-toggle");
      },
    },
    {
      tooltip: "Next Track",
      icon: path.join(__dirname, "assets/icons/skip_next.png"),
      click: () => {
        mainWindow.webContents.send("media-next-track");
      },
    },
  ]);
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
