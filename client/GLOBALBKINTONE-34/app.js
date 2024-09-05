import { woffId, lambdaUrl } from './params.js';

window.addEventListener('load', () => {
    woffInit();
});

const woffInit = () => {

    // Initialize WOFF
    woff.init({ woffId: woffId })
        .then(() => {
            if (!woff.isLoggedIn()) {
                return woff.login();
                // woffInit()
            } else
            // Success
            // Get and show user profile
                getProfile()
                .then((profile) => {
                    $("#name-line-works").text(profile.displayName);
                })
                .catch((err) => {
                    window.alert(err);
                });
        })
        .catch((err) => {
            console.log(err);
            // Error

        });
}
const getProfile = () => {
    return new Promise((resolve, reject) => {
        // Get profile
        woff.getProfile().then((profile) => {
            // Success
            console.log(profile)
            resolve(profile)

        }).catch((err) => {
            // Error
            console.error(err)
            reject(err)
        });
    });
}
$(document).ready(function() {});

const buildPageCreate = async() => {
    await Promise.all([getRecord_6015(), getRecord_6004()]);
    $("#btn-lookup_6015").click(function() {
        $("#exampleModal").modal('show');
    });
    $("#btn-lookup_6004").click(function() {
        $("#modal-6004").modal('show');
    });
    elementTracking();
};
const getRecord_6015 = async() => {
    // https://gbalb-demo.cybozu.com/k/6015/
    let res = await axios.get(lambdaUrl + "?id=6015&isQuery=true");
    const records = res.data;
    let html = "";
    let arrValue = [];
    records.forEach((record) => {
        html += `
            <tr>
                <th><p>${record.名称_防火対象物名称.value}</p></th>
                <th><button class="btn btn-select" onclick="selectName('${record.$id.value}', '${record.名称_防火対象物名称.value}', '${record.所在地_防火対象物名称.value}', '${record.防火管理者_防火対象物名称.value}')" type="button">SET</button></th>
            </tr>`;
        arrValue.push({
            "name": record.名称_防火対象物名称.value,
            "location": record.所在地_防火対象物名称.value,
            "use": record.用途.value,
            "fire_manager": record.防火管理者_防火対象物名称.value,
            "id": record.$id.value,
        });
    });
    $("#tb_6015>tbody").html(html);
    const arrName = arrValue.map(val => val.name);
    var input = document.getElementById("name-of-fire");
    new Awesomplete(input, {
        list: arrName,
        minChars: 1,
    });
    input.addEventListener("awesomplete-selectcomplete", function(event) {
        const selectedOption = arrValue.find(option => option.name === event.text.value);
        if (selectedOption) {
            selectName(selectedOption.id, selectedOption.name, selectedOption.location, selectedOption.fire_manager);
        }
    });
    $("#exampleModal").modal('hide');
};
const getRecord_6004 = async() => {
    // https://gbalb-demo.cybozu.com/k/6004/
    let res = await axios.get(lambdaUrl + "?id=6004&isQuery=true");
    const records = res.data;
    let html = "";
    let arrValue = [];
    console.log(records);
    records.forEach((record) => {
        html += `
            <tr>
                <th><p>${record.氏名_点検者名簿.value}</p></th>
                <th><p>${record.会社名_点検者名簿.value}</p></th>
                <th><p>${record.住所_点検者名簿.value}</p></th>
                <th><button class="btn btn-select" onclick="selectInspector('${record.$id.value}','${record.氏名_点検者名簿.value}' ,'${record.会社名_点検者名簿.value}', '${record.電話番号_点検者名簿.value}', '${record.住所_点検者名簿.value}')" type="button">SET</button></th>
            </tr>`;
        arrValue.push({
            "name_erased": record.氏名_点検者名簿.value,
            "inspector_company": record.会社名_点検者名簿.value,
            "telephone": record.電話番号_点検者名簿.value,
            "address": record.住所_点検者名簿.value,
            "id": record.$id.value,
        });
    });
    $("#tb_6004>tbody").html(html);
    const arrName = arrValue.map(val => val.name_erased);
    var input = document.getElementById("full-name");
    new Awesomplete(input, {
        list: arrName,
        minChars: 1,
    });
    input.addEventListener("awesomplete-selectcomplete", function(event) {
        const selectedOption = arrValue.find(option => option.name_erased === event.text.value);
        if (selectedOption) {
            selectInspector(selectedOption.id, selectedOption.name_erased, selectedOption.inspector_company, selectedOption.telephone, selectedOption.address);
        }
    })
    $("#modal-6004").modal('hide');
};

function elementTracking() {
    $('.form-select').on('change', function() {
        var selectedValue = $(this).val();
        var trElement = $(this).closest('tr');
        console.log(selectedValue);
        trElement.find('.disabled-text').text(selectedValue);
    });
}
export function runCreate() {
    buildPageCreate();
};