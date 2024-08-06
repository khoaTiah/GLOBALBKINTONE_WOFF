import { woffId, lambdaUrl } from '../params.js'
window.addEventListener('load', () => {

});

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