import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:3000/api/products",
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosClient;
