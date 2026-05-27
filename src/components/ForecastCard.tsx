import '../css/ForecastCard.css'

interface ForecastCardProps {
  date: string;
  temp: number;
  description: string;
  humidity: number;
  windSpeed: number;
}

const ForecastCard = ({
  date,
  temp,
  description,
  humidity,
  windSpeed,
}: ForecastCardProps) => {
  return (
    <div className="forecast-card">
      <h3>{date}</h3>

      <p>🌡️ Temp: {temp}°C</p>

      <p>☁️ {description}</p>

      <p>💧 Humidity: {humidity}%</p>

      <p>🌬️ Wind: {windSpeed} m/s</p>
    </div>
  );
};

export default ForecastCard;