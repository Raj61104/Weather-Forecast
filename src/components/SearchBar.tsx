import { useEffect, useState } from "react";
import axios from "axios";
import "../css/SearchBar.css";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

interface CitySuggestion {
  name: string;
  country: string;
  state?: string;
}

const API_KEY = import.meta.env.VITE_API_KEY;

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState<CitySuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!city.trim()) return;

      try {
        const response = await axios.get(
          `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=7&appid=${API_KEY}`
        );

        setSuggestions(response.data);
      } catch (error) {
        console.log(error);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [city]);


  const handleSelect = (selectedCity: string) => {
    setCity(selectedCity);
    setSuggestions([]);
    setShowSuggestions(false);

    onSearch(selectedCity);
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search city..."
          value={city}
          onChange={(e) => {
          const value = e.target.value;

          setCity(value);
          setShowSuggestions(true);

          if (!value.trim()) {
            setSuggestions([]);
          }
        }}
        />
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="suggestions">
          {suggestions.map((item, index) => (
            <div
              key={index}
              className="suggestion-item"
              onClick={() => handleSelect(item.name)}
            >
              {item.name}, {item.country}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;