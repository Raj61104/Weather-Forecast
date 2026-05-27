import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const getCurrentWeather = async (
  lat: number,
  lon: number
) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );

  return response.data;
};