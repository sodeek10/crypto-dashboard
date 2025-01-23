import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const CryptoChart = () => {
  const { coinId } = useParams();
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart`,
          {
            params: {
              vs_currency: "usd",
              days: "7",
              interval: "daily",
            },
          }
        );

        // Extract timestamps and prices
        const prices = response.data.prices;
        const labels = prices.map((price) =>
          new Date(price[0]).toLocaleDateString()
        );
        const data = prices.map((price) => price[1]);

        // Set chart data
        setChartData({
          labels: labels,
          datasets: [
            {
              label: `${coinId.toUpperCase()} Price (USD)`,
              data: data,
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderWidth: 2,
              tension: 0.4,
            },
          ],
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching chart data:", error);
        setLoading(false);
      }
    };

    fetchChartData();
  }, [coinId]);

  return (
    <div>
      <h1>{coinId.toUpperCase()} Chart</h1>
      {loading ? (
        <p>Loading chart...</p>
      ) : (
        <Line
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: "top",
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Date",
                },
              },
              y: {
                title: {
                  display: true,
                  text: "Price (USD)",
                },
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default CryptoChart;
