import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    appid: import.meta.env.VITE_API_KEY,
    units: "metric",
  },
});

export default axiosInstance;