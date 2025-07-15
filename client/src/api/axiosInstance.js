import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://socio-gem-2.onrender.com/api",
  withCredentials: true,
});

export default axiosInstance;
