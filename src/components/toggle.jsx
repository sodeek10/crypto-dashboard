import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const LightDarkToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#555" : "#fff";
    document.body.style.color = isDarkMode ? "#fff" : "#000";
    document.body.style.transition = "all 0.3s ease";
    // document.body.className = isDarkMode ? "dark" : "light";
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      {/* <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1> */}
      <button
        onClick={toggleTheme}
        style={{
          border: "none",
          background: "none",
          cursor: "pointer",
          fontSize: "1rem",
          color: isDarkMode ? "#ffd700" : "#000",
        }}
        aria-label="Toggle Theme"
      >
        <FontAwesomeIcon icon={faLightbulb} />
      </button>
    </div>
  );
};

export default LightDarkToggle;
