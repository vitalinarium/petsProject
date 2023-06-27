import axios from 'axios';

const apiInstance = axios.create({
    baseURL: 'http://localhost:8000/users/',
    timeout: 5000, // timeout after 5 seconds
    headers: {
        Authorization: localStorage.getItem('access_token')
        ? 'JWT' + localStorage.getItem('access_token')
        : null,
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

export default apiInstance;