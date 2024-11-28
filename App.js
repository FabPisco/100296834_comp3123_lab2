import React, { useState } from "react";
import Weather from "/Users/fabriciopisco/Documents/comp3122/assignments/100296834_comp3123_labtest2/src/Weather";
import './App.css';



function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async () => {
    const API_KEY = "4dffd13d19eeefeff25a0361bc49b971";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod === 200) {
        setWeatherData(data);
      } else {
        alert("City not found!");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}

export default App;
