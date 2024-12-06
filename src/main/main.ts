// src/main/main.ts
import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import { IPCChannels, ToMainPayload, FromMainPayload } from '../types/types';
import { startServer } from '../server/server';

let mainWindow: BrowserWindow | null;
let expressServer: any; // Adjust type as needed

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
        },
    });

    const startUrl =
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:5173'
            : `file://${path.join(__dirname, '../react-app/build/index.html')}`;

    mainWindow.loadURL(startUrl);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

ipcMain.on('toMain', (event, args: ToMainPayload) => {
    console.log('Message received from renderer:', args);

    const response: FromMainPayload = {
        response: `Received your message: "${args.message}"`,
    };

    event.sender.send('fromMain', response);
});

app.whenReady().then(() => {
    // Start the Express server and keep reference to the server instance
    expressServer = startServer();

    createWindow();

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

// Gracefully shut down the Express server on app quit
app.on('before-quit', () => {
    if (expressServer && typeof expressServer.close === 'function') {
        expressServer.close(() => {
            console.log('Express server closed.');
        });
    }
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});
