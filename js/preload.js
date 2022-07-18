("use strict");
const { contextBridge, ipcRenderer } = require("electron");

// Set up context bridge between the renderer process and the main process
contextBridge.exposeInMainWorld("windowControls", {
  close: () => ipcRenderer.send("windowControls:close"),
  maximize: () => ipcRenderer.send("windowControls:maximize"),
  minimize: () => ipcRenderer.send("windowControls:minimize"),
});

// PS PART
contextBridge.exposeInMainWorld("electron", {
  runPS: async (args) => await ipcRenderer.invoke("runPS", args),
});
