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
    console.log(222, mileage);
}
const buildCreatePage = () => {
    $("#btn-lookup-vehicle-name").click(function() {
        $("#vehicle-name").val("")
        woff.scanQR()
            .then((result) => {
                console.log(result);
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
        console.log($(this).val());
        $(".mileage .message-error").text("");
        $("#mileage").removeClass("input-error");
        // if (!dataVehicle) return;
        if (dataVehicle && (dataVehicle.走行距離.value > $(this).val())) {
            $(".mileage .message-error").html("入力した走行距離は現在走行距離より小さいです。<br>ご確認ください。");
            $("#mileage").addClass("input-error");
        }
        let formatNumber = formatNumberToComma($(this).val());
        if (!formatNumber.status) {
            $("#mileage").addClass("input-error");
            return $(".mileage .message-error").html("走行距離は数字である必要があります。");
        }
        $("#mileage").val(formatNumber.number);

    });
};
const clearAll = () => {
    $("span.message-error").html("");
}
export function runCreate() {
    buildCreatePage();
    clearAll();
};
export function runEdit(id) {
    clearAll();
}