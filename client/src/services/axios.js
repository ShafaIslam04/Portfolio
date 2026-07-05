import axios from "axios";

const api = axios.create({
  baseURL: "https://portfolio-api-xjvj.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;