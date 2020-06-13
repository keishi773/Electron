const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;
app.on("window-all-closed", function () {
    if (process.platform != "darwin") {
        app.quit();
    }
});

app.on("ready", function () {
    mainWindow = new BrowserWindow({
        //ウィンドウ作成時のオプション
        "width": 180,
        "height": 70,
        "transparent": true,
        "frame": false,
        "resizable": false,

    });

    mainWindow.loadURL("file://" + __dirname + "/index.html");
    // mainWindow.openDevTools();

    mainWindow.on("closed", function () {
        mainWindow = null;
    });
});