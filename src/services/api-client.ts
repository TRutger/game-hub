import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '9e02fc4e7d8e4d838fe46e63a0273815'
    }
})