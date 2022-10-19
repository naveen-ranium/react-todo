import axios from 'axios';
const user = JSON.parse(sessionStorage.getItem('user'));
const token = user ? user.token : '';
const headers = {
    Accept: 'application/json',
    Authorization: 'Bearer ' + token
}

export default axios.create({
    baseURL: process.env.REACT_APP_NOT_SECRET_CODE,
    headers: headers
});