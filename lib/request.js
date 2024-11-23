export const request = async (method, url, data) => {
    let requestOptions = {};


    if (data) {
        requestOptions.headers = { 'Content-Type': 'application/json' };
        requestOptions.body = JSON.stringify(data);
    }

    if (method !== 'GET') {
        requestOptions.method = method;
    }

    const response = await fetch(url, requestOptions);
    const result = await response.json();
    return result;
}