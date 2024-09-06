const PATH_MENU = './menu/index.html';
const PATH_ADD = './add/index.html';
const PATH_EDIT = './edit/index.html';
const JS_HELPER = './app.js';
const JS_LIST = './edit/app.js'
const CSS_MAIN = './style.css';
const CSS_LIST = './edit/style.css';
const CSS_PAGINATION = './edit/style_pagination_js.css';

window.addEventListener('load', async() => {
    actionSwitch('menu');
});

function actionSwitch(action, id = "") {
    $("#load-main").removeClass("display-none");
    const paths = {
        add: PATH_ADD,
        edit: PATH_ADD,
        menu: PATH_MENU,
        list: PATH_EDIT,
    };

    const path = paths[action] || PATH_MENU;

    $("#main").load(path, function(response, status, xhr) {
        if (status == "success") {
            $("#load-main").addClass("display-none");
            loadScript(JS_HELPER, action, id);
            loadCss([CSS_MAIN]);
        }
        if (action === 'add') {
            loadCreate();
        }
        if (action === 'edit') {
            // loadCreate();
            $("#end-time").show()
            $("#start-time").show()
            $(".edit-signature").show();
            $(".signature-pad-created").hide();
            backList();
        }
        if (action == "list") {
            loadScript(JS_LIST, action, id);
            loadCss([CSS_LIST, CSS_PAGINATION]);
            loadCss([CSS_LIST, CSS_PAGINATION]);
        }
    });
}

async function loadScript(scriptPath, action, id = "") {

    const module = await
    import (scriptPath);
    if (action == "list") {
        if (module.run) {
            module.run();
        }
    }
    if (action == "edit") {
        if (module.runEdit) {
            module.runEdit(id);
        }
    }
    if (action == "add") {
        if (module.runCreate) {
            module.runCreate();
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
    $("#end-time").hide();
    $(".edit-signature").hide();
    $(".signature-pad-created").show();
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
    const formattedDate = `${year}-${month}-${day}`;
    const formattedTime = `${hours}:${minutes}`;
    if (type == "start") {
        $("div#start-time input.day").val(formattedDate);
        $("div#start-time input.time").val(formattedTime);
    }
    if (type == "end") {
        $("div#end-time  input.day").val(formattedDate);
        $("div#end-time  input.time").val(formattedTime);
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
};
const showModelEdit = (id) => {
    // if ($("#id-edit").val(id)) {
    //     $("#id-edit").val("");
    // }
    // $("#id-edit").val(id);
    actionSwitch('edit', id);
}
var showModalDelete = (string, id) => {
    $("#modal-notification").show();
    $(".id-value-remove").val(string);
    $(".id-remove-app").val(id);
    $("#remove-id").text(string);
}
const showMessage = (mess, type, title) => {
    if (type == "error") {} else if (type == "success") {} else if (type == "warning") {}
    $("#toast").removeClass('display-none');
    $("#toast .toast-body span").text(mess);
    $('#toast').toast('show');
}
const backList = () => {
    $("button#btn-menu").addClass("display-none");
    $("button#btn-list").removeClass("display-none");
}