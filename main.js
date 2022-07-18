("use strict");
//PS PART
const fs = require("fs");
// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require("electron");
// Needed to specify location of preload script
const path = require("path");

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    titleBarStyle: "customButtonsOnHover",
    minWidth: 600,
    width: 600,
    minHeight: 955,
    height: 955,
    show: false,
    webPreferences: {
      contextIsolation: true, // this is the default in Electron >= 12
      nodeIntegration: false, // this is the default in Electron >= 5
      preload: `${__dirname}/js/preload.js`,
    },
    resizable: false,
    frame: false,
    // transparent: true,
  });

  const splash = new BrowserWindow({
    width: 700,
    height: 360,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
  });

  splash.loadFile("splash.html");
  splash.center();

  setTimeout(function () {
    splash.close();
    mainWindow.show();
  }, 7000);
  mainWindow.loadFile("index.html");
  mainWindow.webContents.openDevTools();

  // Handle window controls via IPC
  ipcMain.on("windowControls:maximize", () => {
    if (mainWindow.isMaximized()) {
      mainWindow.restore();
    } else {
      mainWindow.maximize();
    }
  });

  ipcMain.on("windowControls:minimize", () => {
    mainWindow.minimize();
  });

  ipcMain.on("windowControls:close", () => {
    mainWindow.close();
  });
}

ipcMain.on("windowControls:maximize2", () => {
  if (mainWindow.isMaximized()) {
    mainWindow.restore();
  } else {
    mainWindow.maximize();
  }
});

ipcMain.on("windowControls:minimize2", () => {
  mainWindow.minimize();
});

ipcMain.on("windowControls:close2", () => {
  mainWindow.close();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// PS PART
const { exec } = require("child_process");
const psDir = `${__dirname}\\files`.replace(/\\/g, "\\\\");

const psFiles = fs.readdirSync(psDir);
ipcMain.handle("runPS", async (event, args) => {
  if (psFiles.includes(`${args}.ps1`)) {
    const cmd = `powershell.exe -executionpolicy remotesigned -File "${psDir}\\\\${args}.ps1"`;
    const res = new Promise((resolve) =>
      exec(cmd, (err, stdout, stderr) => resolve(stdout || stderr))
    );
    return await res;
  }
});
