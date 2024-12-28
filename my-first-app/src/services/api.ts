import axios from "axios";

const baseURL: string = "";

const api = axios.create({
    baseURL: `${baseURL}`
})

export default api;
