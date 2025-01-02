import axios from "axios";

const baseURL: string = "http://62.3.41.209:3000/";

const api = axios.create({
    baseURL: `${baseURL}`
})

export default api;
