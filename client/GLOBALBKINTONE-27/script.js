const PATH_MENU = './menu/index.html';
const PATH_ADD = './add/index.html';
const PATH_EDIT = './edit/index.html';
const JS_HELPER = './app.js';

window.addEventListener('load', async() => {
    actionSwitch('add');
});


function actionSwitch(action) {
    $("#load-main").removeClass("display-none");
    const paths = {
        add: PATH_ADD,
        edit: PATH_EDIT,
        menu: PATH_MENU
    };

    const path = paths[action] || PATH_MENU;

    $("#main").load(path, function(response, status, xhr) {
        if (status == "success") {
            $("#load-main").addClass("display-none");
            loadScript(JS_HELPER);
        }
        if (action === 'add') {
            loadCreate();
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
const loadCreate = () => {
    $("#end-time").hide()
}
const getDate = (type) => {
    const now = new Date();
    // day
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    // time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    // format
    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${hours}:${minutes}`;
    if (type == "start") {
        $("div#start-time input.day").val(formattedDate);
        $("div#start-time input.time").val(formattedTime);
    }
    if (type == "end") {
        $("div#start-end input.day").val(formattedDate);
        $("div#start-end input.time").val(formattedTime);
    }
}