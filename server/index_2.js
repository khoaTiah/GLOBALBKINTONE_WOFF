import { KintoneRestAPIClient } from '@kintone/rest-api-client';
import axios from 'axios';

const SERVICE_USER = {
    'gbalb-demo': {
        'KINTONE_BASE_URL': 'https://gbalb-demo.cybozu.com/',
        'username': "sato",
        'password': 'GbalB1725Pass',
        'base64DecodePass': 'c2F0bzpHYmFsQjE3MjVQYXNz'
    },
};
const TYPE_REQUEST = [
    'comment',
    'user',
    'gets',
    'file',
];
const RESPONSE_404 = {
    'statusCode': 404,
    'body': JSON.stringify({ message: 'not found', code: 'developer' })
}
const RESPONSE_403 = {
    'statusCode': 403,
    'body': JSON.stringify({ message: 'Forbidden', code: 'developer' })
}
const RESPONSE_500 = {
    'statusCode': 500,
    'body': JSON.stringify({ message: 'internal server error', code: 'developer' })
}
const RESPONSE = (error) => {
    return {
        statusCode: error.response.status,
        body: JSON.stringify(error.response.data)
    };
}
const RESPONSE_200 = (data) => {
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    };
}
const getDataAppByQuery = async(appID, userCode, query) => {
    const appId = id;
    const baseUrl = SERVICE_USER[userCode].KINTONE_BASE_URL;
    const client = new KintoneRestAPIClient({
        baseUrl: baseUrl,
        auth: {
            username: SERVICE_USER[userCode].username,
            password: SERVICE_USER[password].username,
        },
    });
    const limit = 50;
    let offset = 0;
    let allRecords = [];
    try {
        let totalCountResponse = await client.record.getRecords({
            app: appId,
            totalCount: true
        });

        const totalCount = totalCountResponse.totalCount;
        const query_Uncode = decodeURIComponent(query);
        // return query_Uncode;
        while (offset < totalCount) {
            const response = await client.record.getRecords({
                app: appId,
                query: `${query_Uncode} limit ${limit} offset ${offset}`
            });
            allRecords = allRecords.concat(response.records);
            offset += limit;
        }
        return RESPONSE_200(allRecords);
    } catch (error) {
        return RESPONSE_500;
    }
};
const getRecordByID = async(appId, recordId, userCode) => {
    const baseUrl = SERVICE_USER[userCode].KINTONE_BASE_URL;
    const client = new KintoneRestAPIClient({
        baseUrl: baseUrl,
        auth: {
            username: SERVICE_USER[userCode].username,
            password: SERVICE_USER[password].username,
        },
    });
    try {
        const response = await client.record.getRecord({
            app: appId,
            id: recordId,
        });
        return RESPONSE_200(response);
    } catch (error) {
        return RESPONSE_500;
    }

};
const postApp = async(event, appID, userCode) => {
    try {
        const base64DecodePass = SERVICE_USER[userCode].base64DecodePass;
        const baseUrl = SERVICE_USER[userCode].KINTONE_BASE_URL;
        const url = baseUrl + "k/v1/record.json?app=" + appID;
        const headers = {
            'Content-Type': 'application/json',
            'X-Cybozu-Authorization': base64DecodePass
        };
        const body = {
            "app": appID,
            "record": JSON.parse(event.body)
        };
        try {
            const response = await axios.post(url, body, { headers });
            return RESPONSE_200(response.data);
        } catch (error) {
            return RESPONSE(error);
        }
    } catch (error) {
        return RESPONSE_500();
    }
};
const removeApp = async(appID, recordId, userCode) => {
    try {
        const base64DecodePass = SERVICE_USER[userCode].base64DecodePass;
        const appId = appID;
        const baseUrl = SERVICE_USER[userCode].KINTONE_BASE_URL;
        const url = baseUrl + "k/v1/records.json";
        const headers = {
            'Content-Type': 'application/json',
            'X-Cybozu-Authorization': base64DecodePass
        };
        const body = {
            "app": appId,
            'ids': [recordId]
        };
        try {
            const response = await axios.delete(url, { headers, data: body });
            return RESPONSE_200(response.data);
        } catch (error) {
            return RESPONSE(error);
        }
    } catch (error) {
        return RESPONSE_500();
    }
}
const uploadFIle = async(event, userCode) => {
    const data = JSON.parse(event.body)
    const pathS3 = data.path;
    const fileName = data.fileName;
    const baseUrl = SERVICE_USER[userCode].KINTONE_BASE_URL;
    const client = new KintoneRestAPIClient({
        baseUrl: baseUrl,
        auth: {
            username: SERVICE_USER[userCode].username,
            password: SERVICE_USER[password].username,
        },
    });
    const response = await axios.get(pathS3, {
        responseType: 'arraybuffer'
    });
    try {
        const { fileKey } = await client.file.uploadFile({
            file: {
                name: fileName,
                data: response.data,
            }
        });
        return RESPONSE_200(fileKey);
    } catch (error) {
        return RESPONSE_500();
    }
};
const getUsers = async(userCode) => {
    const base64DecodePass = SERVICE_USER[userCode].base64DecodePass;
    const baseUrl = SERVICE_USER[userCode].KINTONE_BASE_URL;;
    const url = baseUrl + "v1/users.json";
    const headers = {
        'X-Cybozu-Authorization': base64DecodePass
    };

    try {
        const response = await axios.get(url, { headers });
        return RESPONSE_200(response.data);
    } catch (error) {
        return RESPONSE(error);
    }
}
const getComments = async(appID, recordID, userCode) => {
    const appId = appID;
    const baseUrl = SERVICE_USER[userCode].KINTONE_BASE_URL;
    const client = new KintoneRestAPIClient({
        baseUrl: baseUrl,
        auth: {
            username: SERVICE_USER[userCode].username,
            password: SERVICE_USER[password].username,
        },
    });
    var offset = 0;
    var limit = 10;
    var isNewer = false;
    var comments = [];
    try {
        do {
            let response = await client.record.getRecordComments({
                app: appId,
                record: recordID,
                order: 'asc',
                offset: offset,
                limit: limit
            });
            isNewer = response.newer;
            offset += limit;
            comments.push(response.comments);
        } while (isNewer)
        return RESPONSE_200({ comments: comments });
    } catch (error) {
        return RESPONSE_500();
    }
}
const addComment = async(appId, userCode, event) => {
    const baseUrl = SERVICE_USER[userCode].KINTONE_BASE_URL;
    const base64DecodePass = SERVICE_USER[userCode].base64DecodePass;
    const url = baseUrl + "k/v1/record/comment.json";
    const headers = {
        'Content-Type': 'application/json',
        'X-Cybozu-Authorization': base64DecodePass
    };
    var jsonCV = JSON.parse(event.body);
    var body = {
        'app': Number(appId),
        'record': jsonCV.recordID,
        'comment': jsonCV.comment
    };
    try {
        const response = await axios.post(url, body, { headers });
        return RESPONSE_200(response);
    } catch (error) {
        RESPONSE(error);
    }
};
const deleteComment = async(appId, userCode, recordId, commentId) => {
    const baseUrl = SERVICE_USER[userCode].KINTONE_BASE_URL;
    const base64DecodePass = SERVICE_USER[userCode].base64DecodePass;
    const url = baseUrl + "k/v1/record/comment.json";
    const headers = {
        'Content-Type': 'application/json',
        'X-Cybozu-Authorization': base64DecodePass
    };
    var body = {
        'app': Number(appId),
        'record': Number(recordId),
        'comment': Number(commentId)
    };
    try {
        const response = await axios.delete(url, { headers, data: body });
        return RESPONSE_200(response.data);
    } catch (error) {
        return RESPONSE(error);
    }
};

// 

const HTTP_SUCCESS_CODE = 200;
const SCHEDULE_PREVIEW_ATTACHMENT_EXPIRED = 3600; // Thời gian hết hạn cache

// Hàm xử lý khi gọi API lấy dữ liệu và trả về hình ảnh
function fetchImageAndRespond() {
    axios.get('https://example.com/api/image', { responseType: 'arraybuffer' }) // Lấy hình ảnh từ API
        .then(response => {
            if (response.status === HTTP_SUCCESS_CODE) {
                const headers = new Headers();
                headers.append('Content-Type', 'image/png');
                headers.append('Cache-Control', `public, max-age=${SCHEDULE_PREVIEW_ATTACHMENT_EXPIRED}`);

                const blob = new Blob([response.data], { type: 'image/png' }); // Tạo blob từ dữ liệu nhận được
                const url = URL.createObjectURL(blob); // Tạo URL từ blob để sử dụng trong front-end

                // Tạo thẻ image để hiển thị hình ảnh
                const img = document.createElement('img');
                img.src = url;
                document.body.appendChild(img); // Thêm hình ảnh vào trang web
            }
        })
        .catch(error => {
            console.error('Error fetching image:', error);
        });
}
export async function handler(event) {
    var userCode;
    var recordID;
    var type;
    var query;

}