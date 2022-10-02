import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes',
    responseType: 'json',
    timeout: 10000
});

export function getRandomJoke() {
    return axiosInstance.get('/random');
} 