import { woffId, lambdaUrl } from './params.js'
window.addEventListener('load', () => {
    woffInit();
});
var signaturePadHome;
const buildDate = () => {
    let today = new Date();
    let day = ("0" + today.getDate()).slice(-2);
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    let year = today.getFullYear();
    $("#date-now").text(month + '-' + day + '-' + year)
}
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
                    buildDate();
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
    $("#reset-start-time").click(function() {
        $("#start-time input.day").val("");
        $("#error-start-time>span").text("");
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
    $("#btn-create-start-time").click(async function() {
        $(".message-error").text("");
        $("#message-error>span").text("");

        let startDay = $("div#start-time input.day").val();
        let startTime = $("div#start-time input.time").val();
        let qr = $("#forklift-number").val();
        let flag = false;
        if (!startDay || !startTime) {
            $("#error-start-time").text("貸出日時を空にすることはできません。");
            flag = true;
        }
        if (signaturePadHome.isEmpty()) {
            $("#err-signature").text("サインしてください。");
            flag = true;
        }
        if (flag) return;
        $("#loading-web").removeClass("display-none");
        let profile = await woff.getProfile().then((profile) => {
            return profile;
        }).catch((err) => {
            return err;
        });
        const data = signaturePadHome.toDataURL()
        let { path, fileName } = await uploadBase64ToS3(data);
        const formData = {
            "path": path,
            "fileName": profile.displayName + "_.jpg"
        }
        let idFile = await axios.put(lambdaUrl, formData, {
                headers: {}
            })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.error(error);
            });
        let body = {
            // "日付": { 'value': $("#date-now").text() },
            "フォークリフト番号": { 'value': $("#forklift-number").val() },
            "緯度": { 'value': $("#latitude").val() },
            "経度": { 'value': $("#longitude").val() },
            "トークルームID": { 'value': profile.userId },
            "LINE_WORKS名": { 'value': profile.displayName },
            "日時": { 'value': convertUTC(startDay, startTime) },
            // "返却日時": { 'value': siteName },
        };
        var fileKey = idFile;
        if (fileKey != undefined) {
            body["手書きサイン"] = {
                'value': [{
                    "fileKey": fileKey
                }]
            };
        }
        await axios.post(lambdaUrl + "?id=5957", body)
            .then((res) => {
                if (res.status == 200) {
                    let url = `https://gbalb-demo.cybozu.com/k/5957/show#record=${res.data.id}`;
                    let msg = "登録しました。\n" +
                        "フォークリフト番号 : " + $("#forklift-number").val() + "\n" +
                        "緯度 : " + $("#latitude").val() + "\n" +
                        "経度 : " + $("#longitude").val() + "\n" +
                        "貸出日時 : " + startDay + " " + startTime;

                    if (woff.isInClient()) {
                        woff.sendMessage({ 'content': msg });
                    }
                    $("#loading-web").addClass("display-none");
                    showMessage("データ作成成功。");
                    // $("#toast .toast-body span").text("登録しました。 ページを3秒ごとに自動リロードします。");
                    // $('#toast').toast('show');
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
const update = () => {
    {
        $("#btn-create-end-time").click(async function() {
            let endDay = $("div#end-time input.day").val();
            let endTime = $("div#end-time input.time").val();
            $("#error-end-time").text("");
            $("#message-error>span").text("");
            if (!endDay || !endTime) {
                return $("#error-end-time").text("貸出日時を空にすることはできません。");
            }
            $("#loading-web").removeClass("display-none");
            let body = {
                "日時_0": { 'value': convertUTC(endDay, endTime) },
            };
            let res = {
                id: $("#id-edit").val(),
                body: body,
            };
            await axios.patch(lambdaUrl + "?id=5957", res)
                .then((res) => {
                    if (res.status == 200) {
                        let startDay = $("div#start-time input.day").val();
                        let startTime = $("div#start-time input.time").val();
                        let msg = "返却日時の更新に成功しました。" +
                            "\nフォークリフト番号 :" + $("#forklift-number").val() +
                            "\n貸出日時 :" + startDay + " " + startTime +
                            "\n返却日時  :" + endDay + " " + endTime;

                        if (woff.isInClient()) {
                            woff.sendMessage({ 'content': msg });
                        }
                        $("#loading-web").addClass("display-none");
                        showMessage('登録しました。 ページを3秒ごとに自動リロードします。')
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
}
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
const getRecordByID = async(id) => {
    let appId = 5957;
    axios.get(lambdaUrl + `?id=${appId}&recordId=${id}`)
        .then((res) => {
            console.log(res);
            const records = res.data;
            console.log(records);
            $("#forklift-number").val(records.record.フォークリフト番号.value);
            $("#latitude").val(records.record.緯度.value);
            $("#longitude").val(records.record.経度.value);
            if (records.record.手書きサイン.value.length > 0) {
                $(".edit-signature .message-signature").text("署名済み");
                $(".edit-signature .icon-check.true").show();
                $(".edit-signature .icon-check.false").hide();
            } else {
                $(".edit-signature .message-signature").text("未署名");
                $(".edit-signature .icon-check.true").hide();
                $(".edit-signature .icon-check.false").show();
            }

            let startTime = convertTimeEdit(records.record.日時.value);
            $("div#start-time input.day").val(startTime.date);
            $("div#start-time input.time").val(startTime.time);
            disableButton(true);
        })
        .catch((err) => {
            console.error(err);
        });
}
const convertTimeEdit = (timeString) => {
    const date = new Date(timeString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return {
        date: `${year}-${month}-${day}`,
        time: `${hours}:${minutes}`
    }
};
const disableButton = (isTrue) => {
    if (isTrue) {
        $("#get-qr").addClass("disable-btn");
        $("#get-location").addClass("disable-btn");
        $("#start-time .btns").hide();
        $("#btn-upload-file").addClass("disable-btn");
        $("#remove-file").addClass("disable-btn");
    } else {
        $("#get-qr").removeClass("disable-btn");
        $("#get-qr").removeClass("disable-btn");
        $("#btn-upload-file").removeClass("disable-btn");
        $("#remove-file").removeClass("disable-btn");
        $("#start-time .btns").show();
    }
}
const convertUTC = (date, time) => {
    // get GTM
    let now = new Date();
    let localTimeString = now.toString();
    let gmtOffsetMatch = localTimeString.match(/GMT[+-]\d{4}/);
    let gtm = gmtOffsetMatch ? gmtOffsetMatch[0] : '';

    let dateTimeLocal = `${date} ${time} ${gtm}`;
    dateTimeLocal = `${date}T${time}${gtm.replace('GMT', '')}`;
    let localTime = new Date(dateTimeLocal);
    return localTime.toISOString().slice(0, 19) + 'Z';
}

// 


var s3Name = "";
var bucketRegion = "";
var accessKeyID = "";
var secretAccessKey = "";

AWS.config.update({
    region: bucketRegion,
    credentials: new AWS.Credentials(accessKeyID, secretAccessKey)
});
var s3 = new AWS.S3();
async function uploadBase64ToS3(base64Data, contentType = 'image/png') {
    var folderName = "developer/public";
    var fileName = Date.now() + "_" + "mm.jpg";
    var albumPhotosKey = folderName + "/";
    var photoKey = albumPhotosKey + fileName;
    const base64String = base64Data.split(',')[1];
    const blob = new Blob([Uint8Array.from(atob(base64String), c => c.charCodeAt(0))], { type: contentType });
    const upload = new AWS.S3.ManagedUpload({
        params: {
            Bucket: s3Name,
            Key: photoKey,
            Body: blob,
            ContentEncoding: 'base64',
            ContentType: contentType
        },
    });
    const data = await upload.promise();
    return {
        "path": `https://${s3Name}.s3.amazonaws.com/${photoKey}`,
        "fileName": fileName
    };

}

const removeFile = () => {
    console.log("Removing");
    $("#file").val("");
    $("#files-name>span").text("");
    $("#btn-upload-file").removeClass("disable-btn");

}

function deletePhoto(fileName) {
    var params = {
        Bucket: s3Name,
        Key: "developer/public/" + fileName
    };

    s3.deleteObject(params, function(err, data) {
        if (err) {
            console.error("There was an error deleting the photo: ", err.message);
        } else {
            console.log("Photo deleted successfully");
        }
    });
}
// S3


export function runEdit(id) {
    $("#id-edit").val(id);
    getRecordByID(id);
    $("#reset-end-time").click(function() {
        $("#end-time input.day").val("");
        $("#end-time input.time").val("");
        $("#error-end-time").text("");
    });
    update();
};
export function runCreate() {
    // checkPermission();
    // nút xóa
    woffInit();
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
    $("#reset-start-time").click(function() {
        $("#start-time input.day").val("");
        $(".message-error").text("");
        const canvas = document.getElementById('signature-pad');
        const signaturePad = new SignaturePad(canvas);
        signaturePadHome = signaturePad;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
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
    $("#remove-file").click(function() {
        removeFile();
    });
    createData();
    const canvas = document.getElementById('signature-pad');
    const signaturePad = new SignaturePad(canvas);
    signaturePadHome = signaturePad;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    $("#clear-signature_pad").click(function() {
        const canvas = document.getElementById('signature-pad');
        const signaturePadNew = new SignaturePad(canvas);
        signaturePadHome = signaturePadNew;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    });

    function resizeCanvas() {
        const ratio = Math.max(window.devicePixelRatio || 1, 1);
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        canvas.getContext('2d').scale(ratio, ratio);
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // signaturePadHome.clear(); // 
    }
};