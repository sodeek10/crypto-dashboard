const Data = () => {
  const dummyTrendingCoins = [
    {
      id: 1,
      name: "Bitcoin",
      price: "104,638",
      change: "+3%",
      image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=025",
    },
    {
      id: 2,
      name: "Ethereum",
      price: "3,247",
      change: "+2%",
      image: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=025",
    },
    {
      id: 3,
      name: "Dogecoin",
      price: "0.352",
      change: "+5%",
      image: "https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=025",
    },
  ];

  const dummyWatchlist = [
    {
      id: 1,
      name: "Solana",
      price: "247.98",
      image: "https://cryptologos.cc/logos/solana-sol-logo.png?v=025",
    },
    {
      id: 2,
      name: "Cardano",
      price: "2.35",
      image: "https://cryptologos.cc/logos/cardano-ada-logo.png?v=025",
    },
  ];

  return (
    <div>
      <div className="dashboard">
        {/* Header Section */}
        {/* <div className="dashboard-header"> */}
        {/* <h1>Crypto Dashboard</h1> */}
        {/* <p>Track live cryptocurrency stats and trends</p> */}
        {/* </div> */}

        {/* Market Stats Section */}
        <div className="market-stats">
          <div className="stat-card">
            <h3>Total Market Cap</h3>
            <p>$20 Trillion</p>
          </div>
          <div className="stat-card">
            <h3>24h Volume</h3>
            <p>$120 Billion</p>
          </div>
          <div className="stat-card">
            <h3>Bitcoin Dominance</h3>
            <p>67%</p>
          </div>
        </div>

        {/* Trending Coins Section */}
        <div className="trending-section">
          <h2>Trending Coins</h2>
          <div className="crypto-grid">
            {dummyTrendingCoins.map((coin) => (
              <div className="crypto-cards" key={coin.id}>
                <img src={coin.image} alt={coin.name} />
                <h3>{coin.name}</h3>
                <p>Price: ${coin.price}</p>
                <p>Change: {coin.change}%</p>
              </div>
            ))}
          </div>
        </div>

        {/* Watchlist Section */}
        <div className="watchlist-section">
          <h2>My Watchlist</h2>
          <p>Track your favorite cryptocurrencies here</p>
          <div className="crypto-grid">
            {dummyWatchlist.map((coin) => (
              <div className="crypto-cards" key={coin.id}>
                <img src={coin.image} alt={coin.name} />
                <h3>{coin.name}</h3>
                <p>Price: ${coin.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
