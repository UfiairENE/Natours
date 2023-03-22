/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';

export const register = async(name, email, password, passwordConfirm) => {

    try {
        const res = await axios({
            method: 'POST',
            url: '/api/v1/users/signup',
            data: {
                name,
                email,
                password,
                passwordConfirm
            }
        });

        if (res.data.status === 'success') {
            showAlert('success', 'Registration Successful');
            // console.log(email, password)
            window.setTimeout(() => {
                location.assign('/')
            }, 1500)
        }
    } catch (err) {
        showAlert('error', err.response.data.message)
        if (err.response.data.message == 'Something went very wrong') {
            showAlert('success', 'Registration Successful');
            window.setTimeout(() => {
                location.assign('/')
            }, 1500)
        }
        if (err.response.data.message == 'Something went very wrong') {
            showAlert('success', 'Registration Successful');
            window.setTimeout(() => {
                location.assign('/')
            }, 1500)
        }

    }
};