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
    await Promise.all([getRecord_6015()]);
    $("#exampleModal").modal('show');
};
const getRecord_6015 = async() => {
    // https://gbalb-demo.cybozu.com/k/6015/
    let res = await axios.get(lambdaUrl + "?id=6015&isQuery=true");
    const records = res.data.records;
    console.log(records);
};
export function runCreate() {
    buildPageCreate();
};