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
            // $("#load-main").addClass("display-none");
            loadScript(JS_HELPER, action, id);
            loadCss([CSS_MAIN]);
        }
        // if (action === 'add') {
        //     loadCreate();
        // }
        // if (action === 'edit') {
        //     // loadCreate();
        //     $("#end-time").show()
        //     $("#start-time").show()
        //     $(".edit-signature").show();
        //     $(".signature-pad-created").hide();
        //     backList();
        // }
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
// $(document).ready(function() {
//     $("#btn-lookup_6015").click(function() {
//         $("#exampleModal").modal('show');
//     });
// });
function selectName(id, name, location, fire_manager) {
    $("#name-of-fire").val(name);
    $("#fire-manager").val(fire_manager);
    $("#location").val(location);
    $("#exampleModal").modal('hide');
};

function selectInspector(id, name, company, telephone, address) {
    $("#full-name").val(name);
    $("#company-name").val(company);
    $("#telephone").val(telephone);
    $("#address").val(address);
    $("#modal-6004").modal('hide');
}

function clearLookup_6015() {
    $("#name-of-fire").val("");
    $("#fire-manager").val("");
    $("#location").val("");
}

function clearLookup_6004() {
    $("#full-name").val("");
    $("#company-name").val("");
    $("#telephone").val("");
    $("#address").val("");
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