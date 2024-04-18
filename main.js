const { app, BrowserWindow } = require('electron');

function createWindow () {
    const win = new BrowserWindow({
    });
  
    // Load the login.html of the app.
    win.loadFile('login.html');
  }

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});