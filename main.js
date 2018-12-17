const {
    app,
    BrowserWindow,
    ipcMain
} = require('electron')
let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        
    })
    mainWindow.loadURL("http://localhost:3000");
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}
app.on('ready', createWindow)
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
});
ipcMain.on("start",(event,arg)=>{
    let obj=JSON.parse(arg);
    console.log(obj)
});