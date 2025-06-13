import axios from "axios"

const api = axios.create({baseURL: 'https://filamentphp.abdulwaheed.me/api'});

export default async function useApiRequest(requestData) {
    return await api.request({
        method: requestData.method,
        url: requestData.url,
        data: requestData.data,
        params: requestData.method?.toLowerCase() === 'get' ? requestData.data : {},
        headers: requestData.headers
    }).then(response => {
        return Promise.resolve(response.data);
    })
    .catch(error => {
        return Promise.reject(error.response)
    })
}