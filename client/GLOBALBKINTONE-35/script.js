const PATH_MENU = './menu/index.html';
const PATH_ADD = './add/index.html';
const PATH_EDIT = './edit/index.html';
const JS_HELPER = './app.js';
const JS_LIST = './edit/app.js'
const CSS_MAIN = './style.css';
const CSS_LIST = './edit/style.css';
const CSS_PAGINATION = './edit/style_pagination_js.css';

window.addEventListener('load', async() => {
    actionSwitch('add');
});

function actionSwitch(action, id = "") {
    const paths = {
        add: PATH_ADD,
        edit: PATH_ADD,
        menu: PATH_MENU,
        list: PATH_EDIT,
    };

    const path = paths[action] || PATH_MENU;

    $("#main").load(path, function(response, status, xhr) {
        if (status == "success") {
            loadScript(JS_HELPER, action, id);
            loadCss([CSS_MAIN]);
        }
        // if (action === 'add') {
        //     loadCreate();
        // }
        if (action === 'edit') {
            // loadCreate();

            // backList();
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
const showModelEdit = (id) => {
    actionSwitch('edit', id);
}
var showModalDelete = (id) => {
    $("#modal-notification").show();
    $(".id-remove-app").val(id);
    $("#remove-id").text(id);
}
const showMessage = (mess, type) => {
    if (type == "error") {
        $("#toast").removeClass("success warning").addClass("error");
        $("#toast .toast-header strong").text("エラー");
    } else if (type == "success") {
        $("#toast").removeClass("error warning").addClass("success");
        $("#toast .toast-header strong").text("成功");
    } else if (type == "warning") {
        $("#toast").removeClass("error success").addClass("warning");
        $("#toast .toast-header strong").text("警告");
    } else {
        return;
    }
    $("#toast .toast-body span").text(mess);
    $("#toast").removeClass('display-none');
    $("#toast .toast-body span").text(mess);
    $('#toast').toast('show');
}
const clearLookup_vehicleName = () => {
    $("#vehicle-name").val("");
    $(".vehicle-name span.message-error").text("");
    $(".vehicle-name input#vehicle-name").removeClass("input-error");
    $("#current-mileage").val("")
}
const formatNumberToComma = (number) => {
    console.log(number);
    let value = number.replace(/,/g, '');
    if (!isNaN(value)) {
        return {
            status: true,
            number: value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }
    }
    return { status: false, number: 0 };
}
const formatNumberRemoveComma = (number) => {
    return Number(number.replace(/,/g, ''));
}