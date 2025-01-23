// import { FaLightbulb } from "react-icons/fa";

import Search from "./searchBar";
import { Link } from "react-router-dom";
import LightDarkToggle from "./toggle";

const Navbar = () => {
  return (
    <div>
      <nav className="flex">
        <div className="dashboard">
          <Link to="/" className="link">
            <h1> Dashboard</h1>
          </Link>
        </div>

        <Search></Search>
        <span>
          {/* <FaLightbulb></FaLightbulb> */}
          <LightDarkToggle></LightDarkToggle>
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
