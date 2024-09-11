import { woffId, lambdaUrl } from './params.js';
window.addEventListener('load', () => {
    woffInit();
});
var dataVehicle;
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
            console.log(profile)
            resolve(profile)

        }).catch((err) => {
            // Error
            console.error(err)
            reject(err)
        });
    });
};
const getMileageManagementByName = async(name) => {
    // https://gbalb-demo.cybozu.com/k/6017/
    dataVehicle = "";
    $(".vehicle-name span.message-error").text("");
    $(".vehicle-name input#vehicle-name").removeClass("input-error");
    $(".name-of-fire .coating").attr("hidden", false);
    let res = await axios.get(lambdaUrl + "?id=6017&isQuery=true&query=" + encodeURIComponent(`車両名="${name}"`));
    const records = res.data;
    if (records.length <= 0) {
        $(".vehicle-name span.message-error").text("両名が存在しません！");
        $(".vehicle-name input#vehicle-name").addClass("input-error");
        return;
    }
    $("#current-mileage").val(formatNumberToComma(records[0].走行距離.value).number);
    dataVehicle = records[0];
    let mileage = $("#mileage").val();
    if (!mileage) return;
}
const buildCreatePage = () => {
    $("#btn-lookup-vehicle-name").click(function() {
        $("#vehicle-name").val("")
        woff.scanQR()
            .then((result) => {
                $("#vehicle-name").val(result.value);
                getMileageManagementByName(result.value);
            })
            .catch((err) => {
                alert(err);
            });
    });
    $("button.btn.btn-clear.me-1").click(function() {
        dataVehicle = "";
    });
    getProfile()
        .then((profile) => {
            $("#name-line-works").text(profile.displayName);
        });
    $("#mileage").on("change", function() {
        $(".mileage .message-error").text("");
        $("#mileage").removeClass("input-error");
        let formatNumber = formatNumberToComma($(this).val());
        if (!formatNumber.status) {
            $("#mileage").addClass("input-error");
            return $(".mileage .message-error").html("走行距離は数字である必要があります。");
        }
        let number = formatNumberRemoveComma($(this).val());
        // if (!dataVehicle) return;
        if (dataVehicle && (dataVehicle.走行距離.value > number)) {
            $(".mileage .message-error").html("入力した走行距離は現在走行距離より小さいです。<br>ご確認ください。");
            $("#mileage").addClass("input-error");
        }

        $("#mileage").val(formatNumber.number);

    });
};
const clearAll = () => {
    $("span.message-error").html("");
}
const createData = async() => {
    $("#btn-update-or-add").click(async function() {
        let mileage = $("#mileage").val();
        let flag = false;
        if (!mileage) {
            $("#mileage").addClass("input-error");
            $(".mileage .message-error").html("走行距離は必須項目です。");
            flag = true;
        }
        if (!dataVehicle) {
            $(".vehicle-name input#vehicle-name").addClass("input-error");
            $(".vehicle-name span.message-error").text("両車両名は必須項目です。");
            flag = true;
        };
        if (flag) return;
        let err = $(".message-error").text();
        if (err.length > 0) return;
        let user_id = await getProfile()
            .then((profile) => {
                return profile.userId;
            });
        let bodyMileageManagement = {
            "ルックアップ": {
                "type": "SINGLE_LINE_TEXT",
                "value": $("#vehicle-name").val(),
            },
            "現在地": {
                "type": "DROP_DOWN",
                "value": $("#current-location").val(),
            },
            "走行距離": {
                "type": "NUMBER",
                "value": formatNumberRemoveComma($("#mileage").val()),
            },
            "ユーザーID": {
                "type": "SINGLE_LINE_TEXT",
                "value": user_id,
            },
        };
        let bodyVehicleMaster = {
            "走行距離": {
                value: formatNumberRemoveComma($("#mileage").val())
            }
        };
        let resPut = {
            id: dataVehicle.$id.value,
            body: bodyVehicleMaster,
        };
        await axios.post(lambdaUrl + "?id=6018", bodyMileageManagement)
            .then((res) => {
                if (res.status == 200) {
                    // $("#load-main").attr("hidden", true);
                    // let msg = "新しいデータの作成が完了しました！";
                    // if (woff.isInClient()) {
                    //     woff.sendMessage({ 'content': msg });
                    // }
                    // showMessage(msg, 'success');
                    // setTimeout(function() {
                    //     location.reload();
                    // }, 3000);
                }
            })
            .catch((err) => {
                $("#load-main").attr("hidden", true);
                var data = err.response.data.message
                $('html, body').animate({
                    scrollTop: $('.action-submit span').offset().top
                }, 1000);
                // showMessage("データ作成中にエラーが発生しました", 'error');
                $(".action-submit span").text(data);
            });
    });
};
export function runCreate() {
    buildCreatePage();
    clearAll();
    createData();
};
export function runEdit(id) {
    clearAll();
}