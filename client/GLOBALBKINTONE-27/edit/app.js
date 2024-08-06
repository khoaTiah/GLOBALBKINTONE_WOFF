import { woffId, lambdaUrl } from '../params.js'
const getData = () => {
    let appID = '5957';
    axios.get(lambdaUrl + `?id=${appID}`)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.error(err);
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
}
export function run() {
    getData();
    getProfile();
};