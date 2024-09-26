import { woffId, lambdaUrl } from './params.js';
window.addEventListener('load', () => {
    woffInit();
});
var dataQR;
const woffInit = (type = null) => {

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
                    if (type == 'create') {
                        $("#name-line-works").text(profile.displayName);
                        $("#person-name").val(profile.displayName);
                    }
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
const getQR = async(string) => {
    // https://cz0899nxjruw.cybozu.com/k/19
    dataQR = "";
    $(".qr-code span.message-error").text("");
    $("#storage-installation").val('');
    $("#last-time").val('');
    $(".qr-code input#qr-code").removeClass("input-error");
    $(".qr-code .coating").attr("hidden", false);
    let res = await axios.get(lambdaUrl + "?id=19&userCode=k-sinsei&query=" + encodeURIComponent(`設備管理QRコード="${string}"`));
    const records = res.data;
    if (records.length <= 0) {
        $(".qr-code span.message-error").text("設備管理QRコードが存在しません。");
        $(".qr-code input#qr-code").addClass("input-error");
        $(".qr-code .coating").attr("hidden", true);
        return;
    }
    // $("#current-mileage").val(formatNumberToComma(records[0].走行距離.value).number);
    $("#storage-installation").val(records[0].保管設置場所.value);
    $("#last-time").val(formatNumberToComma(records[0].総走行距離.value).number);
    dataQR = records[0];
    $(".qr-code .coating").attr("hidden", true);
}
const buildCreatePage = async() => {
    $("#btn-lookup-qr-code").click(function() {
        $("#qr-code").val("")
        woff.scanQR()
            .then((result) => {
                $("#qr-code").val(result.value);
                getQR(result.value);
            })
            .catch((err) => {
                alert(err);
            });
    });
    $("button.btn.btn-clear.me-1").click(function() {
        dataQR = "";
    });
    // get profile
    // const profile = await getProfile();
    // $("#name-line-works").text(profile.displayName);
    // $("#person-name").val(profile.displayName);

    $("#total-mileage").on("change", function() {
        $(".total-mileage .message-error").text("");
        $("#total-mileage").removeClass("input-error");
        $("#mileage").removeClass("input-error");
        let formatNumber = formatNumberToComma($(this).val());
        if (!formatNumber.status) {
            $("#total-mileage").addClass("input-error");
            return $(".total-mileage .message-error").html("走行距離は数字である必要があります。");
        }
        let number = formatNumberRemoveComma($(this).val());
        // if (!dataQR) return;
        if (dataQR && (dataQR.総走行距離.value > number)) {
            $(".total-mileage .message-error").html("入力した走行距離は現在走行距離より小さいです。<br>ご確認ください。");
            $("#total-mileage").addClass("input-error");
            $("#mileage").addClass("input-error");
        }

        $("#total-mileage").val(formatNumber.number);
        if (dataQR) {
            $("#mileage").val(formatNumberToComma((number - dataQR.総走行距離.value).toString()).number);
        }


    });
};
const clearAll = () => {
    $("span.message-error").html("");
}
const createData = async() => {
    $("#btn-update-or-add").click(async function() {
        $("#load-main").attr("hidden", false);
        let qrCode = $("#qr-code").val();
        let flag = false;
        if (!qrCode) {
            $("#qr-code").addClass("input-error");
            $(".qr-code .message-error").html("設備管理QRコードは必須です。");
            flag = true;
        }
        if (flag) {
            $("#load-main").attr("hidden", true);
            return;
        }
        let err = $(".message-error").text();
        if (err.length > 0) {
            $("#load-main").attr("hidden", true);
            return;
        }
        let user_name = await getProfile()
            .then((profile) => {
                return profile.displayName;
            });
        let vehicle = {
            "点検_運転_者氏名_0": {
                "value": user_name,
            },
            "設備管理QRコード": {
                "value": $("#qr-code").val(),
            },
            "保管設置場所_変更": {
                "value": $("#location-change").val(),
            },
            "総走行距離": {
                "value": formatNumberRemoveComma($("#total-mileage").val()),
            },
        };
        let bodyManagement = {
            "設備管理QRコード": {
                value: formatNumberRemoveComma($("#total-mileage").val())
            }
        };
        let resPut = {
            id: dataQR.$id.value,
            body: bodyManagement,
        };
        await axios.post(lambdaUrl + "?id=6018", bodyMileageManagement)
            .then(async(res) => {
                if (res.status == 200) {
                    const resultUpdate = await updateVehicle(6017, resPut);
                    $("#load-main").attr("hidden", true);
                    if (!resultUpdate) {
                        showMessage("データ作成中にエラーが発生しました", 'error');
                    } else {
                        let msg = "新しいデータの作成が完了しました！";
                        if (woff.isInClient()) {
                            woff.sendMessage({ 'content': msg });
                        }
                        showMessage(msg, 'success');
                        setTimeout(function() {
                            location.reload();
                        }, 3000);
                    }
                }
            })
            .catch((err) => {
                $("#load-main").attr("hidden", true);
                var data = err.response.data.message
                $('html, body').animate({
                    scrollTop: $('.btn-save span').offset().top
                }, 1000);
                showMessage("データ作成中にエラーが発生しました", 'error');
                $(".btn-save span").text(data);
            });
    });
};
const updateVehicle = async(id, res) => {
    try {
        const response = await axios.patch(lambdaUrl + `?id=${id}`, res);
        if (response.status == 200) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.error(err);
        return false;
    }
};

export function runCreate() {
    woffInit('create');
    buildCreatePage();
    clearAll();
    createData();
};
export function runEdit(id) {
    clearAll();
}