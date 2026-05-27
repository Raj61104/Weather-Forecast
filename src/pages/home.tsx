import { useAppDispatch, useAppSelector } from "../Hooks/useAppDispatch";
import { fetchWeather } from "../feature/weather/weatherSlice";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../feature/weather/WeatherCard";
import ForecastCard from "../components/ForecastCard";

const Home = () => {
  const dispatch = useAppDispatch();

  const { weather, loading, error } = useAppSelector(
    (state) => state.weather
  );

  const handleSearch = (city: string) => {
    dispatch(fetchWeather(city));
  };

  return (
    <div className="home">
      <h1>Weather Forecast</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <Loader />}

      {error && <p>{error}</p>}

      {weather && (
        <>
          <WeatherCard
            city={weather.city.name}
            temp={weather.list[0].main.temp}
            description={weather.list[0].weather[0].description}
            humidity={weather.list[0].main.humidity}
            windSpeed={weather.list[0].wind.speed}
          />

          {weather.list.slice(1, 6).map((item, index) => (
            <ForecastCard
              key={index}
              date={item.dt_txt}
              temp={item.main.temp}
              description={item.weather[0].description}
              humidity={item.main.humidity}
              windSpeed={item.wind.speed}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Home;