import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_CLIENT_BASE_URL,
    headers: {
        "Content-type": "application/json"
    }
});