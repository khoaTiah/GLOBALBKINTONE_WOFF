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

});