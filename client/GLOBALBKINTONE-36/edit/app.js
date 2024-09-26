import { woffId, lambdaUrl } from '../params.js'
var DATA_APP;

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
};
const getProfile = () => {
    return new Promise((resolve, reject) => {
        // Get profile
        woff.getProfile().then((profile) => {
            // Success
            console.log(profile);
            $("#name-line-works").text(profile.displayName);
            resolve(profile)

        }).catch((err) => {
            // Error
            console.error(err)
            reject(err)
        });
    });
}
const getData = () => {
    let appID = '21';
    $("#load-main").attr("hidden", false);
    axios.get(lambdaUrl + `?id=${appID}&userCode=k-sinsei`)
        .then((res) => {
            const records = res.data;
            DATA_APP = records;
            $('#pagination-container').pagination({
                dataSource: records,
                pageSize: 10000000,
                pageRange: 1,
                showPrevious: true,
                showNext: true,
                callback: function(data, pagination) {
                    var html = simpleTemplating(data);
                    $("#table-list>tbody").html(html);
                    var htmlMobile = templateMobile(data);
                    $("#ls-mobile").html(htmlMobile);

                },
                formatNavigator: '<%= rangeStart %>-<%= rangeEnd %> of <%= totalNumber %> items',
            });
            $("#load-main").attr("hidden", true);

        })
        .catch((err) => {
            console.error(err);
        });
};


function simpleTemplating(data) {
    let html = "";

    data.forEach(function(record, index) {
        let buttonEdit =
            `<div><button class="edit icon-list" onclick="showModelEdit('${record.$id.value}')">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#0b9d37" d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/></svg>
    </button>`;
        let buttonRemove =
            `<button class="remove icon-list" onclick="showModalDelete('${record.$id.value}')">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11.4229" cy="11.5772" r="10.9056" transform="rotate(45 11.4229 11.5772)" fill="#1AB53C"/>
            <path d="M14.8457 8L7.8457 15M14.8457 15L7.8457 8" stroke="white"/>
            </svg>
            
    </button></div>`;
        html += `<tr>
                    <th></th>
                    <th scope="row"><div>${Number(index) + 1}</div></th>
                    <td class="id-re">
                    <div class="link_detail">
                       ${record.$id.value}
                    </div>
                    </td>
                    <td style="text-align: center;">${record.設備管理QRコード.value}</td>
                    <td>${record.点検_運転_者氏名_0.value || ""}</td>
                    <td>${record.保管設置場所_変更.value || ""}</td>
                    <td style="text-align: center;">${(formatNumberToComma(record.前回総走行距離.value).number)} km</td>
                    <td>${(formatNumberToComma(record.総走行距離.value).number)} km</td>
                    <td style="border:none;"></td>
                </tr>`;
    });
    return html;
}
const templateMobile = (data) => {
        let html = "";
        data.forEach(function(record, index) {
            let btnEdit = `
        <button class="me-2" onclick="showModelEdit('${record.$id.value}')">
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.98971 19.4615L0.0604248 27L7.59891 25.0707L26.2844 6.38529L20.6394 0.740356L1.98971 19.4615ZM5.49099 20.712L4.20481 19.4258L20.4965 3.16982L21.7827 4.45601L5.49099 20.712Z" fill="#8BCB99"/>
            </svg>
        </button>`;

            let btnRemove = `
        <button class="" onclick="showModalDelete('${record.$id.value}')">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="17" cy="17" r="16.2635" transform="rotate(45 17 17)" fill="#1AB53C"/>
                <path d="M22 12L13 21M22 21L13 12" stroke="white"/>
            </svg>                                                                
        </button>`;
            html += `
        <div class="mobile-item">
        <div class="title-ls">
            <span class="index-ls fw-bold">${index + 1}</span>
        </div>
        <div class="content-ls">
            <div class="item-a">
                <span class="label-item">
                レコード番号
                </span>
                <hr>
                <span class="content-item logo">
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="13.5" cy="13.5" r="13" fill="#8BCB99" stroke="#7EB68A"/>
                        <path d="M15.6806 10.7758V12.0474H17.7333H19.7679L15.6806 9.17725V10.7758Z" fill="white"/>
                        <path d="M12.3746 11.8434H14.7774V11.5391H12.3746V10.3043H14.7774V10H9V18H19V13.0425H12.3746V11.8255V11.8434ZM12.0919 17.7136H9.30035V16.3714H12.0919V17.7136ZM12.0919 16.085H9.30035V14.868H12.0919V16.085ZM12.0919 14.5638H9.30035V13.3468H12.0919V14.5638ZM12.0919 13.0604H9.30035V11.8434H12.0919V13.0604ZM12.0919 11.5391H9.30035V10.3043H12.0919V11.5391ZM18.7173 17.7136H12.3922V16.3714H18.7173V17.7136ZM18.7173 16.085H12.3922V14.868H18.7173V16.085ZM18.7173 13.3468V14.5638H12.3922V13.3468H18.7173Z" fill="white"/>
                        <path d="M23.292 6.7067C23.2012 6.61587 23.0377 6.61587 22.9469 6.7067C22.8561 6.79753 22.8561 6.96102 22.9469 7.05185C23.0377 7.14268 23.0922 7.26984 23.0922 7.397C23.0922 7.52416 23.0377 7.65132 22.9469 7.74215C22.8561 7.83298 22.7289 7.88747 22.6017 7.88747C22.4746 7.88747 22.3474 7.83298 22.2566 7.74215C22.1658 7.65132 22.1113 7.52416 22.1113 7.397C22.1113 7.26984 22.1658 7.14268 22.2566 7.05185C22.3474 6.96102 22.3474 6.79753 22.2566 6.7067C22.1658 6.61587 22.0023 6.61587 21.9114 6.7067C21.7298 6.88836 21.6208 7.12451 21.6208 7.397C21.6208 7.66949 21.7298 7.90564 21.9114 8.0873C22.0204 8.19629 22.1658 8.28712 22.3111 8.32345C22.2384 9.4134 21.5118 10.2854 20.5127 10.6305V8.39612H19.6226C19.1503 5.90741 16.7342 4 13.7914 4C10.8485 4 8.43245 5.90741 7.96014 8.39612H7.07001V10.5942C6.0709 10.249 5.36243 9.39523 5.2716 8.28712C5.41693 8.23262 5.56226 8.15996 5.67125 8.05097C5.85291 7.86931 5.9619 7.63315 5.9619 7.36067C5.9619 7.08818 5.85291 6.85203 5.67125 6.67037C5.58042 6.57954 5.41693 6.57954 5.3261 6.67037C5.23527 6.7612 5.23527 6.92469 5.3261 7.01552C5.41693 7.10635 5.47143 7.23351 5.47143 7.36067C5.47143 7.50599 5.41693 7.61499 5.3261 7.70582C5.23527 7.79665 5.12628 7.85114 4.98095 7.85114C4.83563 7.85114 4.72663 7.79665 4.6358 7.70582C4.54497 7.61499 4.49048 7.48783 4.49048 7.36067C4.49048 7.23351 4.54497 7.10635 4.6358 7.01552C4.72663 6.92469 4.72663 6.7612 4.6358 6.67037C4.54497 6.57954 4.38148 6.57954 4.29065 6.67037C4.10899 6.85203 4 7.08818 4 7.36067C4 7.63315 4.10899 7.86931 4.29065 8.05097C4.41781 8.17813 4.59947 8.26896 4.78113 8.32345C4.83563 9.14091 5.19894 9.84938 5.74391 10.358C6.10723 10.7032 6.56137 10.9575 7.07001 11.1028V19.3137H8.19629C7.83298 19.895 7.4515 20.4945 7.08818 21.0758C8.94109 21.7116 10.9757 21.7116 12.8286 21.0758C12.4652 20.4945 12.0838 19.895 11.7205 19.3137H15.8622C15.4989 19.895 15.1175 20.4945 14.7541 21.0758C16.607 21.7116 18.6416 21.7116 20.4945 21.0758C20.1312 20.4945 19.7497 19.895 19.3864 19.3137H20.5309V11.1391C21.0395 10.9938 21.4936 10.7395 21.857 10.3944C22.4019 9.88571 22.7652 9.15908 22.8197 8.35979C23.0014 8.32345 23.1831 8.23262 23.3102 8.0873C23.4919 7.90564 23.6009 7.66949 23.6009 7.397C23.6009 7.12451 23.4919 6.88836 23.3102 6.7067H23.292ZM17.2428 6.1254C17.588 6.1254 17.8605 6.39788 17.8605 6.74303C17.8605 7.08818 17.588 7.36067 17.2428 7.36067C16.8977 7.36067 16.6252 7.08818 16.6252 6.74303C16.6252 6.39788 16.8977 6.1254 17.2428 6.1254ZM11.9203 7.17901H15.6988V8.0328H11.9203V7.17901ZM10.358 6.1254C10.7032 6.1254 10.9757 6.39788 10.9757 6.74303C10.9757 7.08818 10.7032 7.36067 10.358 7.36067C10.0129 7.36067 9.74038 7.08818 9.74038 6.74303C9.74038 6.39788 10.0129 6.1254 10.358 6.1254ZM19.7679 9.79488V18.5326H7.85114V9.17724H19.7679V9.81305V9.79488Z" fill="white"/>
                    </svg>                                
                  ${record.$id.value}
                </span>
            </div>
            <div class="item-a">
                <span class="label-item">
                    設備管理QRコード
                </span>
                <hr>
                <span class="content-item">                              
                    ${record.設備管理QRコード.value}
                </span>
            </div>
            <div class="item-a">
                <span class="label-item">
                    点検(運転)者氏名
                </span>
                <hr>
                <span class="content-item">                              
                    ${record.点検_運転_者氏名_0.value || ""}
                </span>
            </div>
            <div class="item-a mb-4">
                <span class="label-item">
                    保管・設置場所_変更
                </span>
                <hr>
                <span class="content-item">                              
                   ${record.保管設置場所_変更.value || ""}
                </span>
            </div>
            <div class="item-a">
                <span class="label-item">
                    前回総走行距離
                </span>
                <hr>
                <span class="content-item">                              
                    ${formatNumberToComma(record.前回総走行距離.value).number} km
                </span>
            </div>
            <div class="item-a">
                <span class="label-item">
                    総走行距離
                </span>
                <hr>
                <span class="content-item">                              
                    ${(formatNumberToComma(record.総走行距離.value).number)} km
                </span>
            </div>

        </div>
    </div>
        `;
        });
        return html;
    }
    // var debounceTimer;
    // $('#input-search').on('input', function() {
    //     clearTimeout(debounceTimer);
    //     debounceTimer = setTimeout(function() {
    //         let code = $("#filter").val();
    //         if (code == "null") return;
    //         const keyword = $('#input-search').val().toLowerCase();
    //         let filteredData = DATA_APP.filter(item => item[code].value.includes(keyword));
    //         $('#pagination-container').pagination({
    //             dataSource: filteredData,
    //             pageSize: 10,
    //             pageRange: 1,
    //             showPrevious: true,
    //             showNext: true,
    //             callback: function(data, pagination) {
    //                 var html = simpleTemplating(data);
    //                 $("#table-list>tbody").html(html);
    //                 var htmlMobile = templateMobile(data);
    //                 $("#ls-mobile").html(htmlMobile);

//             },
//             formatNavigator: '<%= rangeStart %>-<%= rangeEnd %> of <%= totalNumber %> items',
//         });
//     }, 500); // Trì hoãn 1,5 giây
// });
// $('#filter').on('change', function(e) {
//     var optionSelected = $("option:selected", this);
//     var valueSelected = this.value;
//     var textSelected = optionSelected.text();
//     $("#input-search").attr("placeholder", textSelected);

//     debounceTimer = setTimeout(function() {
//         const keyword = $('#input-search').val().toLowerCase();
//         let filteredData;
//         if (valueSelected == "null") {
//             filteredData = DATA_APP;
//         } else
//             filteredData = DATA_APP.filter(item => item[valueSelected].value.includes(keyword));
//         $('#pagination-container').pagination({
//             dataSource: filteredData,
//             pageSize: 10,
//             pageRange: 1,
//             showPrevious: true,
//             showNext: true,
//             callback: function(data, pagination) {
//                 var html = simpleTemplating(data);
//                 $("#table-list>tbody").html(html);
//                 var htmlMobile = templateMobile(data);
//                 $("#ls-mobile").html(htmlMobile);

//             },
//             formatNavigator: '<%= rangeStart %>-<%= rangeEnd %> of <%= totalNumber %> items',
//         });
//     }, 500);

// });
const remove = () => {
    document.getElementById('delete-record').addEventListener('click', async function() {
        $("#load-main").attr("hidden", false);
        let id = $(".id-remove-app").val();
        $('#modal-notification').modal().hide();
        axios.delete(lambdaUrl + "?id=6003&recordId=" + id)
            .then((res) => {
                if (res.status == 200) {
                    $("#load-main").attr("hidden", true);
                    let msg = " IDが" + id + "のレコードの削除に成功しました。";
                    if (woff.isInClient()) {
                        woff.sendMessage({ 'content': msg }).then(() => {
                            console.debug(msg);
                        }).catch((err) => {
                            return window.alert(err);
                        });
                    }
                    showMessage(msg, "success")
                    setTimeout(function() {
                        location.reload();
                    }, 3000);
                }
            })
            .catch((err) => {
                $("#load-main").attr("hidden", false);
                showMessage("データ作成中にエラーが発生しました", 'error');
                console.error(err);
            });
    });
    filter();
}
const filter = () => {
    var debounceTimer;
    $('#input-search').on('input', function() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(function() {
            let code = $("#filter").val();
            if (code == "null") return;
            const keyword = $('#input-search').val().toLowerCase();
            let filteredData = DATA_APP.filter(item => item[code].value.includes(keyword));
            $('#pagination-container').pagination({
                dataSource: filteredData,
                pageSize: 10,
                pageRange: 1,
                showPrevious: true,
                showNext: true,
                callback: function(data, pagination) {
                    var html = simpleTemplating(data);
                    $("#table-list>tbody").html(html);
                    var htmlMobile = templateMobile(data);
                    $("#ls-mobile").html(htmlMobile);

                },
                formatNavigator: '<%= rangeStart %>-<%= rangeEnd %> of <%= totalNumber %> items',
            });
        }, 500); // Trì hoãn 1,5 giây
    });
    $('#filter').on('change', function(e) {
        var optionSelected = $("option:selected", this);
        var valueSelected = this.value;
        var textSelected = optionSelected.text();
        $("#input-search").attr("placeholder", textSelected);

        debounceTimer = setTimeout(function() {
            const keyword = $('#input-search').val().toLowerCase();
            let filteredData;
            if (valueSelected == "null") {
                filteredData = DATA_APP;
            } else
                filteredData = DATA_APP.filter(item => item[valueSelected].value.includes(keyword));
            $('#pagination-container').pagination({
                dataSource: filteredData,
                pageSize: 10,
                pageRange: 1,
                showPrevious: true,
                showNext: true,
                callback: function(data, pagination) {
                    var html = simpleTemplating(data);
                    $("#table-list>tbody").html(html);
                    var htmlMobile = templateMobile(data);
                    $("#ls-mobile").html(htmlMobile);

                },
                formatNavigator: '<%= rangeStart %>-<%= rangeEnd %> of <%= totalNumber %> items',
            });
        }, 500);

    });
};
export function run() {
    filter();
    woffInit();
    getData();
    switchDisplayData('table');
    remove();
    $(".close-modal-notification").click(function() {
        $('#modal-notification').modal().hide();
    });
    $("#input-search").attr("placeholder", $('#filter option:selected').text());
};