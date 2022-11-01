import axios from "axios"

export const apiKey = "563492ad6f9170000100000110eaac4e358845f6bd5dc434af0f6e20"

export const api = axios.create({
    // baseURL: 'http://172.21.143.20:8000/api',
    baseURL: 'http://127.0.0.1:8000/api',
    headers:{
        'Content-Type': 'application/json'
    },
})