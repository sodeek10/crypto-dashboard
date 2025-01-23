import { useEffect, useState } from "react";
import CryptoCard from "./priceCards";
import axios from "axios";

const Card = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        //   setLoading(true);
        // Fetch data from the CoinGecko API. Replace 'usd' with your desired currency code.
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 100,
              page: 1,
            },
          }
        );
        // console.log(response);
        //   const data = await response.json();
        setCoins(response.data); // Set the fetched crypto data
        setLoading(false); //
      } catch (error) {
        setError("Failed to fetch cryptocurrency data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <p>Loading cryptocurrencies...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="crypto-container">
          {coins.map((coin) => (
            <CryptoCard key={coin.id} coin={coin} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
