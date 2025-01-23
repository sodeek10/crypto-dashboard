import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ResultsPage = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${query}`
        );
        setResults(response.data);
      } catch (error) {
        console.error("Error fetching results", error);
      }
    };

    if (query) {
      fetchResults();
    }
  }, [query]);

  return (
    <div className="results-page">
      {/* <Navbar></Navbar> */}
      <h1 className="res">Search Results</h1>
      {results.length === 0 ? (
        <p className="no-results">No results found</p>
      ) : (
        <div className="results">
          {results.map((coin) => (
            <div key={coin.id} className="coin-card">
              <img src={coin.image} alt={coin.name} />
              <h2>{coin.name}</h2>
              <p>${coin.current_price}</p>
              <h1>Market Cap: ${coin.market_cap}</h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResultsPage;
