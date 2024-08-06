const PATH_MENU = './menu/index.html';
const PATH_ADD = './add/index.html';
const PATH_EDIT = './edit/index.html';
const JS_HELPER = './app.js';
const JS_LIST = './edit/app.js'
const CSS_MAIN = './style.css';
const CSS_LIST = './edit/style.css';
const CSS_PAGINATION = './edit/style_pagination_js.css';

window.addEventListener('load', async() => {
    actionSwitch('list');
});


function actionSwitch(action) {
    $("#load-main").removeClass("display-none");
    const paths = {
        add: PATH_ADD,
        edit: PATH_EDIT,
        menu: PATH_MENU,
        list: PATH_EDIT,
    };

    const path = paths[action] || PATH_MENU;

    $("#main").load(path, function(response, status, xhr) {
        if (status == "success") {
            $("#load-main").addClass("display-none");
            loadScript(JS_HELPER, action);
            loadCss([CSS_MAIN]);
        }
        if (action === 'add') {
            loadCreate();
        }
        if (action == "list") {
            loadScript(JS_LIST, action);
            loadCss([CSS_LIST, CSS_PAGINATION]);
            loadCss([CSS_LIST, CSS_PAGINATION]);
        }
    });
}

async function loadScript(scriptPath, action) {
    // var oldScript = document.getElementById("dynamicScript");
    // if (oldScript) {
    //     oldScript.parentNode.removeChild(oldScript);
    // }
    // var newScript = document.createElement("script");
    // newScript.src = scriptPath + "?t=" + new Date().getTime(); //  caching
    // newScript.type = "module";
    // newScript.id = "dynamicScript";
    // document.body.appendChild(newScript);
    const module = await
    import (scriptPath);
    if (action == "list") {
        if (module.run) {
            module.run();
        }
    }
}

function loadCss(cssArray) {
    const existingLinks = document.querySelectorAll('link[id^="dynamicCss"]');
    existingLinks.forEach(link => link.parentNode.removeChild(link));
    cssArray.forEach((cssPath, index) => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = cssPath + "?t=" + new Date().getTime(); // caching
        link.id = `dynamicCss-${index}`;
        document.head.appendChild(link);
    });
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

// page list
function switchDisplayData(key) {
    switch (key) {
        case "table":
            $("#btn-detail").removeClass("active");
            $("#btn-list").addClass("active");
            $("#ls").removeClass("display-none");
            $("#ls-mobile").addClass("display-none");
            break;
        case "card":
            $("#btn-detail").addClass("active");
            $("#btn-list").removeClass("active");
            $("#ls").addClass("display-none");
            $("#ls-mobile").removeClass("display-none");
            break;
        default:
            alert('error');
    }
}
const convertTime = (timeString) => {
        const date = new Date(timeString);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}`;
    }
    //