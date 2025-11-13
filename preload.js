const { contextBridge, ipcRenderer } = require('electron');

// Expose a minimal API to the renderer process.
contextBridge.exposeInMainWorld('electronAPI', {
  sendMessage: async (message) => {
    return await ipcRenderer.invoke('chat:send', message);
  }
});