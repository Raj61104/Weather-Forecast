import '../weather/WeatherCard.css'

interface WeatherCardProps {
  city: string;
  temp: number;
  description: string;
  humidity: number;
  windSpeed: number;
}

const WeatherCard = ({
  city,
  temp,
  description,
  humidity,
  windSpeed,
}: WeatherCardProps) => {
  return (
    <div className="weather-card">
      <h2>{city}</h2>

      <p>🌡️ Temperature: {temp}°C</p>

      <p>☁️ Weather: {description}</p>

      <p>💧 Humidity: {humidity}%</p>

      <p>🌬️ Wind Speed: {windSpeed} m/s</p>
    </div>
  );
};

export default WeatherCard;