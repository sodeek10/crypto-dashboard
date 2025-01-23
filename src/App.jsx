import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ResultsPage from "./pages/searchPage";
import Card from "./components/cryptodata";
import CryptoChart from "./pages/chartPage";
import Navbar from "./components/navbar";
// import LightDarkToggle from "./components/toggle";

function App() {
  return (
    <div>
      {/* <LightDarkToggle></LightDarkToggle> */}
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Card />} />
        <Route path="/results/:query" element={<ResultsPage />} />
        <Route path="/chart/:coinId" element={<CryptoChart />} />
      </Routes>
      {/* <CryptoChart></CryptoChart> */}
    </div>
  );
}

export default App;
