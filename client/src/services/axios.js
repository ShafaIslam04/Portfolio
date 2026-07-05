import axios from "axios";

const api = axios.create({
  baseURL: "https://portfolio-api-xjvj.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;