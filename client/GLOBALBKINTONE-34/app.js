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
    createData();
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
        if (selectedValue == "-----") {
            selectedValue = "";
        } else if (selectedValue == "○") {
            selectedValue = "○";
        } else if (selectedValue == "/") {
            selectedValue = "/";
        } else {
            selectedValue = "×";
        }
        trElement.find('.disabled-text').text(selectedValue);
    });
}
const createData = async() => {
    $("#btn-update-or-add").click(async function() {
        const row1 = $("#row-1");
        const row2 = $("#row-2");
        const row3 = $("#row-3");
        const row4 = $("#row-4");
        const row5 = $("#row-5");
        const row6 = $("#row-6");
        const row7 = $("#row-7");
        const row8 = $("#row-8");
        const row9 = $("#row-9");
        const row10 = $("#row-10");
        const row11 = $("#row-11");
        const row12 = $("#row-12");
        const row13 = $("#row-13");
        const row14 = $("#row-14");
        const row15 = $("#row-15");
        const row16 = $("#row-16");
        const row17 = $("#row-17");
        const row18 = $("#row-18");
        const row19 = $("#row-19");
        let body = {
            "設置階数など_手書き": { 'value': $("#number-of-floors").val() }, //設置階数など（手書き）
            "名称_点検結果報告書": { 'value': $("#name-of-fire").val() }, //防火対象物名称
            "立会者_点検結果報告書": { 'value': $("#witness").val() }, //立会者（手書き）
            "点検種別_点検結果報告書": { 'value': $("#inspection-type").val() }, //点検種別
            "点検年月日_自": { 'value': convertUTC($("#start-date").val()) }, //点検年月日（自）
            "点検年月日_至": { 'value': convertUTC($("#date-arrival").val()) }, //点検年月日（至）
            "氏名_消1": { 'value': $("#full-name-type").val() }, //氏名_消1
            // table
            "結果A_設場": { value: row1.find("select").val() }, //設置場所
            "不良内容_設場": { value: row1.find("input").first().val() }, //不良内容_設場
            "措置内容_設場": { value: row1.find("input").last().val() }, //措置内容_設場
            // tb2
            "結果A_設間": { value: row2.find("select").val() }, //設置間隔
            "不良内容_設間": { value: row2.find("input").first().val() }, //不良内容_設間
            "措置内容_設間": { value: row2.find("input").last().val() }, //措置内容_設間
            // tb3
            "結果A_適": { value: row3.find("select").val() }, //適応性
            "不良内容_適": { value: row3.find("input").first().val() }, //不良内容_適
            "措置内容_適": { value: row3.find("input").last().val() }, //措置内容_適
            // tb4
            "結果A_耐": { value: row4.find("select").val() }, //耐震措置
            "不良内容_耐": { value: row4.find("input").first().val() }, //不良内容_耐
            "措置内容_耐": { value: row4.find("input").last().val() }, //措置内容_耐
            // tb5
            "結果A_表標": { value: row5.find("select").val() }, //表示標識
            "不良内容_表標": { value: row5.find("input").first().val() }, //不良内容_表標
            "措置内容_表標": { value: row5.find("input").last().val() }, //措置内容_表標
            // tb6
            "結果A_本": { value: row6.find("select").val() }, //本体容器
            "不良内容_本": { value: row6.find("input").first().val() }, //不良内容_本
            "措置内容_本": { value: row6.find("input").last().val() }, //措置内容_本
            // tb7
            "結果A_安封": { value: row7.find("select").val() }, //安全栓の封
            "不良内容_安封": { value: row7.find("input").first().val() }, //不良内容_安封
            "措置内容_安封": { value: row7.find("input").last().val() }, //措置内容_安封
            // tb8
            "結果A_安栓": { value: row8.find("select").val() }, //安全栓
            "不良内容_安栓": { value: row8.find("input").first().val() }, //不良内容_安栓
            "措置内容_安栓": { value: row8.find("input").last().val() }, //措置内容_安栓
            // tb9
            "結果A_使済": { value: row9.find("select").val() }, //使用済みの表示装置
            "不良内容_使済": { value: row9.find("input").first().val() }, //不良内容_使済
            "措置内容_使済": { value: row9.find("input").last().val() }, //措置内容_使済
            // tb10
            "結果A_押レ": { value: row10.find("select").val() }, //押し金具レバー等
            "不良内容_押レ": { value: row10.find("input").first().val() }, //不良内容_押レ
            "措置内容_押レ": { value: row10.find("input").last().val() }, //措置内容_押レ
            // tb11
            "結果A_キャ": { value: row11.find("select").val() }, //キャップ
            "不良内容_キャ": { value: row11.find("input").first().val() }, //不良内容_キャ
            "措置内容_キャ": { value: row11.find("input").last().val() }, //措置内容_キャ
            // tb12
            "結果A_ホ": { value: row12.find("select").val() }, //ホース
            "不良内容_ホ": { value: row12.find("input").first().val() }, //不良内容_ホ
            "措置内容_ホ": { value: row12.find("input").last().val() }, //措置内容_ホ
            // tb13
            "結果A_ノ": { value: row13.find("select").val() }, //ノズルホーンノズル栓
            "不良内容_ノ": { value: row13.find("input").first().val() }, //不良内容_ノ
            "措置内容_ノ": { value: row13.find("input").last().val() }, //措置内容_ノ
            // tb14
            "結果A_指圧": { value: row14.find("select").val() }, //指示圧力計
            "不良内容_指圧": { value: row14.find("input").first().val() }, //不良内容_指圧
            "措置内容_指圧": { value: row14.find("input").last().val() }, //措置内容_指圧
            // tb15
            "結果A_圧調": { value: row15.find("select").val() }, //圧力調整器
            "不良内容_圧調": { value: row15.find("input").first().val() }, //不良内容_圧調
            "措置内容_圧調": { value: row15.find("input").last().val() }, //措置内容_圧調
            // tb16
            "結果A_安弁": { value: row16.find("select").val() }, //安全弁
            "不良内容_安弁": { value: row16.find("input").first().val() }, //不良内容_安弁
            "措置内容_安弁": { value: row16.find("input").last().val() }, //措置内容_安弁
            // tb17
            "結果A_保装": { value: row17.find("select").val() }, //保持装置
            "不良内容_保装": { value: row17.find("input").first().val() }, //不良内容_保装
            "措置内容_保装": { value: row17.find("input").last().val() }, //措置内容_保装
            // tb18
            "結果A_車車": { value: row18.find("select").val() }, //車輪（車載式）
            "不良内容_車車": { value: row18.find("input").first().val() }, //不良内容_車車
            "措置内容_車車": { value: row18.find("input").last().val() }, //措置内容_車車
            // tb19
            "結果A_ｶﾞ車": { value: row19.find("select").val() }, //ｶﾞｽ導入管（車載式）
            "不良内容_ｶﾞ車": { value: row19.find("input").first().val() }, //不良内容_ｶﾞ車
            "措置内容_ｶﾞ車": { value: row19.find("input").last().val() }, //措置内容_ｶﾞ車
        };
        await axios.post(lambdaUrl + "?id=6003", body)
            .then((res) => {
                if (res.status == 200) {
                    let msg = "登録しました。\n" +
                        "フォークリフト番号 : " + $("#forklift-number").val() + "\n" +
                        "緯度 : " + $("#latitude").val() + "\n" +
                        "経度 : " + $("#longitude").val() + "\n" +
                        "貸出日時 : " + startDay + " " + startTime;

                    if (woff.isInClient()) {
                        woff.sendMessage({ 'content': msg });
                    }
                    // $("#loading-web").addClass("display-none");
                    // showMessage("データ作成成功。");
                    // // $("#toast .toast-body span").text("登録しました。 ページを3秒ごとに自動リロードします。");
                    // // $('#toast').toast('show');
                    // setTimeout(function() {
                    //     location.reload();
                    // }, 3000);
                }
            })
            .catch((err) => {
                $("#loading-web").addClass("display-none");
                var data = err.response.data
                console.error(data);
            });
    });
}
const convertUTC = (date) => {
    let localDate = new Date(date);
    let utcDate = new Date(Date.UTC(localDate.getFullYear(), localDate.getMonth(), localDate.getDate()));
    return utcDate.toISOString().slice(0, 10);
}
const convertTimeEdit = (timeString) => {
    const date = new Date(timeString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${month}/${day}/${year}`
};
const getRecordByID = async(id) => {
    let appId = 6003;
    axios.get(lambdaUrl + `?id=${appId}&recordId=${id}`)
        .then((res) => {
            const records = res.data;
            $("#number-of-floors").val(records.設置階数など_手書き.value);
            $("#name-of-fire").val(records.名称_点検結果報告書.value);
            $("#witness").val(records.立会者_点検結果報告書.value);
            $("#inspection-type").val(records.点検種別_点検結果報告書.value);
            $("#start-date").val(convertTimeEdit(records.点検年月日_自.value));
            $("#date-arrival").val(convertTimeEdit(records.点検年月日_至.value));
            $("#full-name-type").val(records.氏名_消1.value)
            const row1 = $("#row-1");
            const row2 = $("#row-2");
            const row3 = $("#row-3");
            const row4 = $("#row-4");
            const row5 = $("#row-5");
            const row6 = $("#row-6");
            const row7 = $("#row-7");
            const row8 = $("#row-8");
            const row9 = $("#row-9");
            const row10 = $("#row-10");
            const row11 = $("#row-11");
            const row12 = $("#row-12");
            const row13 = $("#row-13");
            const row14 = $("#row-14");
            const row15 = $("#row-15");
            const row16 = $("#row-16");
            const row17 = $("#row-17");
            const row18 = $("#row-18");
            const row19 = $("#row-19");
            row1.find("select").val(records.結果A_設場.value);;
            row1.find("input").first().val(records.不良内容_設場.value);
            row1.find("input").last().val(records.措置内容_設場.value);

            row2.find("select").val(records.結果A_設間.value);
            row2.find("input").first().val(records.不良内容_設間.value);
            row2.find("input").last().val(records.措置内容_設間.value);

            row3.find("select").val(records.結果A_適.value);
            row3.find("input").first().val(records.不良内容_適.value);
            row3.find("input").last().val(records.措置内容_適.value);

            row4.find("select").val();
            row4.find("input").first().val();
            row4.find("input").last().val();

            row5.find("select").val();
            row5.find("input").first().val();
            row5.find("input").last().val();

            row6.find("select").val();
            row6.find("input").first().val();
            row6.find("input").last().val();

            row7.find("select").val();
            row7.find("input").first().val();
            row7.find("input").last().val();

            row8.find("select").val();
            row8.find("input").first().val();
            row8.find("input").last().val();

            row9.find("select").val();
            row9.find("input").first().val();
            row9.find("input").last().val();

            row10.find("select").val();
            row10.find("input").first().val();
            row10.find("input").last().val();

            row11.find("select").val();
            row11.find("input").first().val();
            row11.find("input").last().val();

            row12.find("select").val();
            row12.find("input").first().val();
            row12.find("input").last().val();

            row13.find("select").val();
            row13.find("input").first().val();
            row13.find("input").last().val();

            row14.find("select").val();
            row14.find("input").first().val();
            row14.find("input").last().val();

            row15.find("select").val();
            row15.find("input").first().val();
            row15.find("input").last().val();

            row16.find("select").val();
            row16.find("input").first().val();
            row16.find("input").last().val();

            row17.find("select").val();
            row17.find("input").first().val();
            row17.find("input").last().val();

            row18.find("select").val();
            row18.find("input").first().val();
            row18.find("input").last().val();

            row19.find("select").val();
            row19.find("input").first().val();
            row19.find("input").last().val();
        })
        .catch((err) => {
            console.error(err);
        });
}
const buildPageEdit = async() => {
    await Promise.all([getRecord_6015(), getRecord_6004()]);
}
export function runCreate() {
    buildPageCreate();
};
export function runEdit(id) {
    buildPageEdit();
    getRecordByID(id);
}