import API from './base';
import axios from 'axios';

export const register = ({ username, password, nickname }) => {
    API.post(`/join`, {
        username,
        password,
        nickname,
    });
};

export const loginTest = async ({ username, password }) => {
    // API.post(`/login`, { username, password });
    // console.log(username);
    const res = await axios.post(`/login`, { username, password });
    console.log(res.data);
    // console.log(res);
};

// const request = require('request');

// const options = {
//     uri: 'http://43.200.220.2:8080',
//     method: 'POST',
//     form: {
//         username: ' ',
//         password: ' ',
//     },
// };

// request.post(options, function (error, response, body) {
//     //callback
// });
