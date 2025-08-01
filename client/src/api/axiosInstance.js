import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://socio-gem.onrender.com/api",
  withCredentials: true,
});


export default axiosInstance;
