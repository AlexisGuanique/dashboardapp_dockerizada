import axios from 'axios';


export const getService = axios.create({
    baseURL: 'https://'
})