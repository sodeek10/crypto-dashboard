import { useNavigate } from "react-router-dom";

const CryptoCard = ({ coin }) => {
  const navigate = useNavigate();

  const handleViewChart = () => {
    console.log(`Navigating to /chart/${coin.id}`);
    navigate(`/chart/${coin.id}`);
  };
  return (
    <div className="card-container">
      <div className="crypto-card">
        <img src={coin.image} alt={coin.name} className="crypto-logo" />
        <h2 className="crypto-name">
          {coin.name} ({coin.symbol.toUpperCase()})
        </h2>
        <p className="crypto-price">${coin.current_price.toLocaleString()}</p>
        <h1>Market Cap: ${coin.market_cap}</h1>
        <button className="chart-button" onClick={handleViewChart}>
          View Chart
        </button>
      </div>
    </div>
  );
};
export default CryptoCard;
