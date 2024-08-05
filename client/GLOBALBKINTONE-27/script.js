const PATH_MENU = './menu/index.html';
const PATH_ADD = './add/index.html';
const PATH_EDIT = './edit/index.html';
const JS_HELPER = './app.js';

window.addEventListener('load', async() => {
    buildDate();
    actionSwitch('add');
});

const buildDate = () => {
    let today = new Date();
    let day = ("0" + today.getDate()).slice(-2);
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    let year = today.getFullYear();
    $("#date-now").text(month + '/' + day + '/' + year)
}

function actionSwitch(action) {
    let path;
    switch (action) {
        case 'add':
            path = PATH_ADD;
            break;
        case 'edit':
            path = PATH_EDIT;
            break;
        case 'menu':
        default:
            path = PATH_MENU;
            break;
    }
    $("#main").load(path, function(response, status, xhr) {
        if (status == "success") {
            loadScript(JS_HELPER);
        }
    });
}

function loadScript(scriptPath) {
    var oldScript = document.getElementById("dynamicScript");
    if (oldScript) {
        oldScript.parentNode.removeChild(oldScript);
    }
    var newScript = document.createElement("script");
    newScript.src = scriptPath + "?t=" + new Date().getTime(); //  caching
    newScript.type = "module";
    newScript.id = "dynamicScript";
    document.body.appendChild(newScript);
}