 const {app, BrowserWindow} = require('electron')

 function createWindow() {
 	// Create app window
 	const win = new BrowserWindow({width: 800, height: 600});

 	// Load index.html file
 	win.loadURL('http://localhost:3000');
 }

app.on('ready', createWindow);