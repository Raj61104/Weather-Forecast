import { useState } from "react";
import "../css/SearchBar.css";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [city, setCity] = useState("");

  const handleSubmit = () => {
    if (!city.trim()) return;

    onSearch(city);
    setCity("");
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      />

      <button onClick={handleSubmit}>🔍</button>
    </div>
  );
};

export default SearchBar;