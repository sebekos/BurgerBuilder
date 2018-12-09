import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e735f.firebaseio.com/'
});

export default instance;