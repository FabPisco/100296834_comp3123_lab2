import React from "react";

function Weather({ data }) {
  const { name, sys, main, weather, wind } = data;

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Weather in {name}, {sys.country}</h2>
      <p><strong>Temperature:</strong> {main.temp}°C</p>
      <p><strong>Feels Like:</strong> {main.feels_like}°C</p>
      <p><strong>Humidity:</strong> {main.humidity}%</p>
      <p><strong>Weather:</strong> {weather[0].description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt={weather[0].description}
      />
      <p><strong>Wind Speed:</strong> {wind.speed} m/s</p>
    </div>
  );
}

export default Weather;
