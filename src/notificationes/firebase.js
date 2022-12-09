const axios = require('axios');

const NOTIFICATION_URL = 'https://fcm.googleapis.com';
const APIKEY = process.env.FIREBASE_APIKEY;

const authorization = `key=${APIKEY}`;

const firebase = axios.default.create({
    baseURL: NOTIFICATION_URL,
});

firebase.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'Content-Type': 'application/json',
        'Authorization': authorization,
    }

    return config;
})

module.exports={
    firebase,
}