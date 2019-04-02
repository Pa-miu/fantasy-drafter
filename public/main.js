const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow() {
	// Create app window
	const win = new BrowserWindow({width: 800, height: 600, icon: __dirname + '/assets/icon.png'});

	// Load index.html file
	win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
	//win.loadURL('http://localhost:3000/');
}

app.on('ready', createWindow);