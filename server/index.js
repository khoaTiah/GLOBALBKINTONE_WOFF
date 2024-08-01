import { KintoneRestAPIClient } from '@kintone/rest-api-client';
import axios from 'axios';
const KINTONE_BASE_URL = 'https://gbalb-demo.cybozu.com/';
const username = "sato"
const password = "GbalB1725Pass";
const token5231 = "4VYH9seMr23oOl8kHKVhyEgUGI287d0ngtRg0ZN8";
const base64DecodePassMain = "c2F0bzpHYmFsQjE3MjVQYXNz";

export async function handler(event) {
    try {
        var paramsID;
        var recordID;
        var type;
        var commentId;
        if (event.rawQueryString) {
            var params = event.rawQueryString;
            params = params.split('&');
            const queryParams = {};
            params.forEach(param => {
                const [key, value] = param.split('=');
                queryParams[key] = value;
            });
            paramsID = queryParams.id;
            recordID = queryParams.recordId || "";
            type = queryParams.type || "";
            commentId = queryParams.commentId || "";
        } else {
            const params = "";
        }
        const httpMethod = event.requestContext.http.method;
        if (type && httpMethod === "GET") {
            switch (type) {
                case 'comments':
                    if (paramsID == '5231') {
                        return await getComments('5231', token5231, recordID);
                    } else {
                        return {
                            statusCode: 404,
                            body: JSON.stringify({ message: 'not found', code: 'developer' })
                        };
                    }
                case 'users':
                    return await getUsers();
                default:
                    return {
                        statusCode: 404,
                        body: JSON.stringify({ message: 'not found', code: 'developer' })
                    };
            }
        } else if (type && httpMethod === "POST") {
            switch (type) {
                case 'comments':
                    if (paramsID == '5231') {
                        return await addComment('5231', event);
                    } else {
                        return {
                            statusCode: 404,
                            body: JSON.stringify({ message: 'not found', code: 'developer' })
                        };
                    }
                default:
                    return {
                        statusCode: 404,
                        body: JSON.stringify({ message: 'not found', code: 'developer' })
                    };
            }
        } else if (type && httpMethod === "DELETE") {
            switch (type) {
                case 'comments':
                    if (paramsID == '5231') {
                        return await deleteComment('5231', recordID, commentId);
                    } else {
                        return {
                            statusCode: 404,
                            body: JSON.stringify({ message: 'not found', code: 'developer' })
                        };
                    }
                default:
                    return {
                        statusCode: 404,
                        body: JSON.stringify({ message: 'not found', code: 'developer' })
                    };
            }
        } else {
            switch (httpMethod) {
                case 'POST':
                    if (paramsID == 5232) {
                        return await postApp_5232(event);
                    } else if (paramsID == 5231) {
                        return await postApp_5231(event);
                    }
                    break;
                case 'GET':
                    if (paramsID == 5232) {
                        return await getApp_5232();
                    } else if (paramsID == 5936) {
                        return await getApp_5936();
                    } else if (paramsID == 5231) {
                        return await getApp_5231();
                    } else {
                        return {
                            statusCode: 403,
                            body: JSON.stringify({ message: 'not found' })
                        };
                    }
                case 'PUT':
                    return await uploadFIle(event);
                case 'DELETE':
                    if (paramsID == 5232) {
                        return await removeApp_5232(paramsID, recordID);
                    } else if (paramsID == 5231) {
                        return await removeApp_5231(paramsID, recordID);
                    }
                case 'PATCH':
                    if (paramsID == 5232) {
                        return await updateApp_5232(event);
                    } else if (paramsID == 5231) {
                        return await updateApp_5231(event);
                    }
                default:
                    return {
                        statusCode: 500,
                        body: JSON.stringify({ message: 'err' })
                    };

            }
        }
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: err })
        };
    }

}
const getComments = async (id, key, recordID) => {
    const apiKey = key;
    const appId = id;
    const baseUrl = KINTONE_BASE_URL;
    const client = new KintoneRestAPIClient({
        baseUrl: baseUrl,
        auth: {
            apiToken: apiKey
        }
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

        return {
            statusCode: 200,
            body: JSON.stringify({ comments: comments })
        };
    } catch (error) {
        console.error(error);

        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error ' })
        };
    }
}
const addComment = async (id, event) => {
    const appId = id;
    const baseUrl = KINTONE_BASE_URL;
    const url = baseUrl + "k/v1/record/comment.json";
    const headers = {
        'Content-Type': 'application/json',
        'X-Cybozu-Authorization': base64DecodePassMain
    };
    var jsonCV = JSON.parse(event.body);
    var body = {
        'app': Number(appId),
        'record': jsonCV.recordID,
        'comment': jsonCV.comment
    };
    try {
        const response =  await axios.post(url, body, { headers });
        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        };
    } catch (error) {
        return {
            statusCode: error.response.status,
            body: JSON.stringify(error.response.data)
        };
    }


};
const deleteComment = async (id, recordId, commentId) => {
    const appId = id;
    const baseUrl = KINTONE_BASE_URL;
    const url = baseUrl + "k/v1/record/comment.json";
    const headers = {
        'Content-Type': 'application/json',
        'X-Cybozu-Authorization': base64DecodePassMain
    };
    var body = {
        'app': Number(appId),
        'record': Number(recordId),
        'comment': Number(commentId)
    };
    try {
        const response = await axios.delete(url, { headers, data: body });
        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        };
    } catch (error) {
        return {
            statusCode: error.response.status,
            body: JSON.stringify(error.response.data)
        };
    }
};
const getApp_5232 = async () => {
    const apiKey = '0zkn5wGorNDH63R0p8akzQBkctJbsJq6B9uHFskf';
    const appId = 5232;
    const baseUrl = KINTONE_BASE_URL;
    const client = new KintoneRestAPIClient({
        baseUrl: baseUrl,
        auth: {
            apiToken: apiKey
        }
    });

    try {
        const response = await client.record.getRecords({ app: appId, query: 'limit 20', totalCount: true });
        return {
            statusCode: 200,
            body: JSON.stringify(response)
        };
    } catch (error) {
        console.error(error);

        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error 1' })
        };
    }
};
const getApp_5936 = async () => {
    const apiKey = "hdUXP46uYrX00VHL5KGwJJeGTOiY7U1FvjlThSXW";
    const appId = 5936;
    const baseUrl = KINTONE_BASE_URL;
    const client = new KintoneRestAPIClient({
        baseUrl: baseUrl,
        auth: {
            apiToken: apiKey
        }
    });

    try {
        const response = await client.record.getRecords({ app: appId, query: 'limit 20', totalCount: true });
        return {
            statusCode: 200,
            body: JSON.stringify(response)
        };
    } catch (error) {
        console.error(error);

        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error 2' })
        };
    }
};
const getApp_5231 = async () => {
    const apiKey = "4VYH9seMr23oOl8kHKVhyEgUGI287d0ngtRg0ZN8";
    const appId = 5231;
    const baseUrl = KINTONE_BASE_URL;
    const client = new KintoneRestAPIClient({
        baseUrl: baseUrl,
        auth: {
            apiToken: apiKey
        }
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

        while (offset < totalCount) {
            const response = await client.record.getRecords({
                app: appId,
                query: `limit ${limit} offset ${offset}`
            });

            allRecords = allRecords.concat(response.records);
            offset += limit;
        }

        return {
            statusCode: 200,
            body: JSON.stringify(allRecords)
        };
    } catch (error) {
        console.error(error);

        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error 2' })
        };
    }
};
const postApp_5231 = async (event) => {
    try {

        const base64DecodePass = "c2F0bzpHYmFsQjE3MjVQYXNz";
        const appId = 5231;
        const baseUrl = KINTONE_BASE_URL;
        const url = baseUrl + "k/v1/record.json?app=" + appId;
        const headers = {
            'Content-Type': 'application/json',
            'X-Cybozu-Authorization': base64DecodePass
        };
        const body = {
            "app": appId,
            "record": JSON.parse(event.body)
        };
        try {
            const response = await axios.post(url, body, { headers });
            return {
                statusCode: 200,
                body: JSON.stringify(response.data)
            };
        } catch (error) {
            return {
                statusCode: error.response.status,
                body: JSON.stringify(error.response.data)
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: error })
        };
    }
};
const postApp_5232 = async (event) => {
    try {

        const base64DecodePass = "c2F0bzpHYmFsQjE3MjVQYXNz";
        const appId = 5232;
        const baseUrl = KINTONE_BASE_URL;
        const url = baseUrl + "k/v1/record.json?app=" + appId;
        const headers = {
            'Content-Type': 'application/json',
            'X-Cybozu-Authorization': base64DecodePass
        };
        const body = {
            "app": appId,
            "record": JSON.parse(event.body)
        };
        try {
            const response = await axios.post(url, body, { headers });
            return {
                statusCode: 200,
                body: JSON.stringify(response.data)
            };
        } catch (error) {
            return {
                statusCode: error.response.status,
                body: JSON.stringify(error.response.data)
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: error })
        };
    }
};
const removeApp_5231 = async (id, recordId) => {
    try {

        const base64DecodePass = "c2F0bzpHYmFsQjE3MjVQYXNz";
        const appId = id;
        const baseUrl = KINTONE_BASE_URL;
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
            return {
                statusCode: 200,
                body: JSON.stringify(response.data)
            };
        } catch (error) {
            return {
                statusCode: error.response.status,
                body: JSON.stringify(error.response.data)
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: error })
        };
    }
}
const removeApp_5232 = async (id, recordId) => {
    try {

        const base64DecodePass = "c2F0bzpHYmFsQjE3MjVQYXNz";
        const appId = id;
        const baseUrl = KINTONE_BASE_URL;
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
            return {
                statusCode: 200,
                body: JSON.stringify(response.data)
            };
        } catch (error) {
            return {
                statusCode: error.response.status,
                body: JSON.stringify(error.response.data)
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: error })
        };
    }
}
const updateApp_5231 = async (event) => {
    try {

        const base64DecodePass = "c2F0bzpHYmFsQjE3MjVQYXNz";
        const appId = 5231;
        const baseUrl = KINTONE_BASE_URL;
        const url = baseUrl + "k/v1/record.json?app=" + appId;
        const headers = {
            'Content-Type': 'application/json',
            'X-Cybozu-Authorization': base64DecodePass
        };
        const data = JSON.parse(event.body);
        const body = {
            "app": appId,
            "id": data.id,
            "record": data.body
        };
        try {
            const response = await axios.put(url, body, { headers });
            return {
                statusCode: 200,
                body: JSON.stringify(response.data)
            };
        } catch (error) {
            return {
                statusCode: error.response.status,
                body: JSON.stringify(error.response.data)
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: error })
        };
    }
}
const updateApp_5232 = async (event) => {
    try {
        const base64DecodePass = "c2F0bzpHYmFsQjE3MjVQYXNz";
        const appId = 5232;
        const baseUrl = KINTONE_BASE_URL;
        const url = baseUrl + "k/v1/record.json?app=" + appId;
        const headers = {
            'Content-Type': 'application/json',
            'X-Cybozu-Authorization': base64DecodePass
        };
        const data = JSON.parse(event.body);
        const body = {
            "app": appId,
            "id": data.id,
            "record": data.body
        };
        try {
            const response = await axios.put(url, body, { headers });
            return {
                statusCode: 200,
                body: JSON.stringify(response.data)
            };
        } catch (error) {
            return {
                statusCode: error.response.status,
                body: JSON.stringify(error.response.data)
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: error })
        };
    }
}
const uploadFIle = async (event) => {
    const data = JSON.parse(event.body)
    const pathS3 = data.path;
    const fileName = data.fileName;
    const baseUrl = KINTONE_BASE_URL;
    const client = new KintoneRestAPIClient({
        baseUrl: baseUrl,
        auth: {
            username: username,
            password: password,
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
        return {
            statusCode: 200,
            body: JSON.stringify(fileKey)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        };
    }
};
const getUsers = async () => {
    const base64DecodePass = "c2F0bzpHYmFsQjE3MjVQYXNz";
    const baseUrl = KINTONE_BASE_URL;
    const url = baseUrl + "v1/users.json";
    const headers = {
        'X-Cybozu-Authorization': base64DecodePass
    };

    try {
        const response = await axios.get(url, { headers });
        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        };
    } catch (error) {
        return {
            statusCode: error.response.status,
            body: JSON.stringify(error.response.data)
        };
    }
}