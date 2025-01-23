import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Search = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length > 2) {
        try {
          const response = await axios.get(
            `https://api.coingecko.com/api/v3/search?query=${query}`
          );
          setSuggestions(response.data.coins);
        } catch (error) {
          console.error("Error fetching suggestions", error);
        }
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [query]);

  const handleSearch = (searchQuery) => {
    navigate(`/results/${searchQuery}`);
    setQuery(""); // Clear the search bar after navigation
  };

  return (
    <div className="home-page">
      <input
        type="text"
        placeholder="Search for a coin"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((coin) => (
            <li key={coin.id} onClick={() => handleSearch(coin.id)}>
              <img src={coin.thumb} alt={coin.name} />
              <span>{coin.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
