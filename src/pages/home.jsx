import Assets from "../components/assets";
import Card from "../components/cryptodata";
import Data from "../components/dummydata";
// import Navbar from "../components/navbar";

const Home = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Assets></Assets>
      <Data></Data>
      <Card></Card>
    </div>
  );
};

export default Home;
