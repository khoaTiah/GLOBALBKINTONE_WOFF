import { woffId, lambdaUrl } from './params.js'
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
                    $("#lineworks-id>span").text(profile.displayName);
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
const checkPermission = () => {
    navigator.mediaDevices.enumerateDevices()
        .then(devices => {
            const cameras = devices.filter(device => device.kind === 'videoinput');
            const microphones = devices.filter(device => device.kind === 'audioinput');
            if (cameras.length > 0) {
                console.log("camera.");
            } else {
                $("#message-error>span").text("システムはカメラにアクセスする権限がありません。")
                console.log("!camera.");
            }

            if (microphones.length > 0) {
                console.log("microphone.");
            } else {
                console.log("!microphone.");
            }
        })
        .catch(error => {
            console.error("error:", error);
        });
};
$(document).ready(function() {
    // checkPermission();
    // nút xóa
    $("#get-qr").click(function() {
        $("#forklift-number").val("")
        woff.scanQR()
            .then((result) => {
                console.log(result);
                $("#forklift-number").val(result.value)
            })
            .catch((err) => {
                alert(err);
            });
    });
    $("#reset-tag").click(function() {
        $("#demo-address").text("")
    });
    $("#get-location").click(function() {
        try {
            $("#latitude").val("");
            $("#longitude").val("");
            $("#load-location").removeClass("display-none");
            $("#get-location").addClass("disable-btn");
            const successCallback = (position) => {
                $("#message-error>span").text("")
                let latitude = position.coords.latitude
                let longitude = position.coords.longitude
                $("#latitude").val(latitude)
                $("#longitude").val(longitude)
                $("#load-location").addClass("display-none");
                $("#get-location").removeClass("disable-btn");
                getAddress(latitude, longitude);
            };

            const errorCallback = (error) => {
                $("#load-location").addClass("display-none");
                $("#get-location").removeClass("disable-btn");
                $("#message-error>span").text("システムは位置情報へのアクセス権限がないか、デバイスがGPSをオンにしていません。")
            };

            // navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    successCallback(position);
                },
                (error) => {
                    errorCallback(error);
                }, { enableHighAccuracy: true, timeout: 10000, maximumAge: 5000 }
            );
        } catch (error) {
            alert(error);
        }
    });
    createData();
});
const createData = async() => {
    $("#btn-create").click(async function() {
        $("#loading-web").removeClass("display-none");
        $("#message-error>span").text("");
        let body = {
            // "日付": { 'value': $("#date-now").text() },
            "フォークリフト番号": { 'value': $("#forklift-number").val() },
            "緯度": { 'value': $("#latitude").val() },
            "経度": { 'value': $("#longitude").val() },
            "トークルームID": { 'value': 0 },
            "経度チャンネルID": { 'value': 0 },
            // "日時": { 'value': siteName },
        };
        await axios.post(lambdaUrl + "?id=5957", body)
            .then((res) => {
                if (res.status == 200) {
                    let url = `https://gbalb-demo.cybozu.com/k/5957/show#record=${res.data.id}`;
                    let msg = "登録しました。\nフォークリフト番号 : " + $("#forklift-number").val() + "\n緯度 : " + $("#latitude").val() + "\n経度 :" + $("#longitude").val() + "\n詳細 : " + url;
                    if (woff.isInClient()) {
                        woff.sendMessage({ 'content': msg });
                    }
                    $("#loading-web").addClass("display-none");
                    $("#toast .toast-body span").text("登録しました。 ページを3秒ごとに自動リロードします。");
                    $('#toast').toast('show');
                    setTimeout(function() {
                        location.reload();
                    }, 3000);
                }
            })
            .catch((err) => {
                $("#loading-web").addClass("display-none");
                var data = err.response.data
                console.error(data);
            });
    });

};
const getAddress = async(lat, lot) => {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lot}`
    await axios.get(url)
        .then((res) => {
            if (res.status == 200) {
                let address = res.data.display_name;
                console.log(address);
                $("#demo-address").text(address);
            }
        })
        .catch((err) => {
            console.log(err);
        });
};