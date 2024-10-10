import { woffId, lambdaUrl } from './params.js';
window.addEventListener('load', () => {
    woff.ready.then(() => {
            woffInit();
        })
        // woffInit();
});
var dataQR;
const woffInit = (type = null) => {

    // Initialize WOFF
    woff.init({ woffId: woffId })
        .then(() => {
            if (!woff.isLoggedIn()) {
                if (checkError()) {
                    $("#load-main").attr("hidden", true);
                    return actionSwitch('error');
                }
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
    $("#btn-upload-file").click(function() {
        document.getElementById('file-input').click();
    });
    $('#file-input').change(async function(event) {
        console.log(event);
        const file = event.target.files[0];
        $('.file-info span.message-error').text('');
        // Kiểm tra định dạng tệp
        if (!file.type.startsWith('image/')) {
            $('.file-info span.message-error').text('画像を入力してください。');
            return;
        }

        $("#btn-upload-file").addClass("un-active");

        try {
            const urlS3 = await addFile();
            const formData = {
                "path": urlS3.path,
                "fileName": urlS3.fileName
            };

            const response = await axios.put(lambdaUrl + '?userCode=k-sinsei', formData, {
                headers: {}
            });
            deletePhoto(formData.fileName);
            // Sử dụng FileReader để hiển thị ảnh
            const reader = new FileReader();
            reader.onload = function(e) {
                const html = `
                <div class="file-item row mt-2" id="img-${response.data}">
                    <div>
                        <img src="${e.target.result}" alt="" id="${response.data}" class="file-image">
                        <div>
                            <span class="file-name">${file.name}</span>
                            <button type='button' class="delete-file ms-2" onclick="removeFile('img-${response.data}')"><i class="fa fa-times-circle-o" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
                `;
                $(".left-file").append(html);
            };

            reader.readAsDataURL(file);
            $("#btn-upload-file").removeClass("un-active");

        } catch (error) {
            console.error(error);
        }
    });

    $("#btn-lookup-qr-code").click(function() {
        $("#qr-code").val("")
        woff.scanQR()
            .then((result) => {
                let value = result.value.replace(/[,、]/g, '\n')
                $("#qr-code").val(value);
                const textarea = document.getElementById('qr-code');
                autoResize(textarea);
            })
            .catch((err) => {});
    });
    $("button.btn.btn-clear.me-1").click(function() {
        dataQR = "";
    });
    // get profile
    // document.getElementById('file-input').addEventListener('change', function(event) {
    //     const file = event.target.files[0]; // Lấy file từ input

    //     if (file) {
    //         const reader = new FileReader(); // Tạo FileReader để đọc file

    //         reader.onload = function(e) {
    //             // Khi đọc file xong, gán kết quả vào src của thẻ img
    //             document.getElementById('demo').src = e.target.result;
    //         };

    //         reader.readAsDataURL(file); // Đọc file dưới dạng DataURL (base64)
    //     }
    // });

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
        $("#qr-code").removeClass("input-error");
        $("#total-mileage").removeClass("input-error");
        let qrCode = $("#qr-code").val();
        let user_name = await getProfile()
            .then((profile) => {
                return profile.displayName;
            });
        let shipment = {
            "商品QR": {
                "value": $("#qr-code").val(),
            },
            "実施場所": {
                "value": $("#location-change").val(),
            },
            "アワメーター": {
                "value": $("#hour-meter").val(),
            },
        };
        await axios.post(lambdaUrl + "?id=6028", shipment)
            .then(async(res) => {
                if (res.status == 200) {
                    $("#load-main").attr("hidden", true);
                    let msg = "新しいデータが登録されました";
                    if (woff.isInClient()) {
                        let msg = "新しいデータが登録されました";
                        woff.sendMessage({
                                content: msg
                            })
                            .then(() => {
                                woff.closeWindow();
                            })
                            .catch((err) => {
                                console.log('error', err);
                            });

                    }
                    showMessage(msg, 'success');
                    setTimeout(function() {
                        location.reload();
                    }, 3000);

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

// S3
// 

AWS.config.update({
    region: bucketRegion,
    credentials: new AWS.Credentials(accessKeyID, secretAccessKey)
});

var s3 = new AWS.S3();
async function addFile() {
    var folderName = "developer/public";
    var files = document.getElementById("file-input").files;
    if (!files.length) {
        return alert("Please choose a file to upload first.");
    }
    var file = files[0];
    var fileName = Date.now() + "_" + file.name;
    var albumPhotosKey = folderName + "/";
    var photoKey = albumPhotosKey + fileName;
    var upload = new AWS.S3.ManagedUpload({
        params: {
            Bucket: s3Name,
            Key: photoKey,
            Body: file,
        },
    });
    var promise = upload.promise();

    try {
        var data = await promise;

        return {
            "path": `https://${s3Name}.s3.amazonaws.com/${folderName}/${fileName}`,
            "fileName": fileName
        }
    } catch (err) {
        alert("There was an error uploading your photo: ", err.message);
    }
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
const getRecordByID = async(id) => {
    let appId = 6028;
    axios.get(lambdaUrl + `?id=${appId}&recordId=${id}`)
        .then((res) => {
            const records = res.data.record;
            console.log(records);
            $("#qr-code").val(records.商品QR.value);
            $("#location-change").val(records.実施場所.value);
            $("#hour-meter").val(records.アワメーター.value);
            let textarea = document.getElementById('qr-code');
            autoResize(textarea);
        })
        .catch((err) => {
            $("#load-main").attr("hidden", true);
            var data = err.response.data.message
            $('html, body').animate({
                scrollTop: $('.action-submit span').offset().top
            }, 1000);
            showMessage("showMessage", 'error');
            $(".action-submit span").text(data);
        });
}
const updateData = async() => {
    $("#btn-update-or-add").click(async function() {
        $(".action-submit span").text("");
        $("#load-main").attr("hidden", false);
        let body = {
            "商品QR": {
                "value": $("#qr-code").val(),
            },
            "実施場所": {
                "value": $("#location-change").val(),
            },
            "アワメーター": {
                "value": $("#hour-meter").val(),
            },
        };
        let res = {
            id: $("#id-edit").val(),
            body: body,
        };
        await axios.patch(lambdaUrl + "?id=6028", res)
            .then((res) => {
                if (res.status == 200) {
                    $("#load-main").attr("hidden", true);
                    let msg = "情報の更新に成功しました！";
                    if (woff.isInClient()) {
                        woff.sendMessage({ 'content': msg });
                    }
                    showMessage(msg, 'success');
                    setTimeout(function() {
                        location.reload();
                    }, 3000);
                }
            })
            .catch((err) => {
                $("#load-main").attr("hidden", true);
                var data = err.response.data.message
                $('html, body').animate({
                    scrollTop: $('.action-submit span').offset().top
                }, 1000);
                showMessage("データ作成中にエラーが発生しました", 'error');
                $(".action-submit span").text(data);
            });
    });
}
export function runCreate() {
    woffInit('create');
    buildCreatePage();
    clearAll();
    createData();
};
export function runEdit(id) {
    $("#id-edit").val(id);
    clearAll();
    getRecordByID(id);
    updateData();
    $("#btn-lookup-qr-code").click(function() {
        $("#qr-code").val("")
        woff.scanQR()
            .then((result) => {
                let value = result.value.replace(/[,、]/g, '\n')
                $("#qr-code").val(value);
                const textarea = document.getElementById('qr-code');
                autoResize(textarea);
            })
            .catch((err) => {});
    });
    $("button.btn.btn-clear.me-1").click(function() {
        dataQR = "";
    });
}