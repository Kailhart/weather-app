import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const defaultCity ="Berlin";

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temp: Math.round(response.data.temperature.current),
      descr: response.data.condition.description,
      feelsLike: Math.round(response.data.temperature.feels_like),
      humid: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      iconUrl: response.data.condition.icon_url,
      date: "Wednesday 07:00",
      city: response.data.city,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form id="search-form">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.descr}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.descr} />
            <span className="temperature">{weatherData.temp}</span>
            <span className="temp-unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Feels like: {weatherData.feelsLike}°C</li>
              <li>Humidity: {weatherData.humid}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "42c1087f21a779atb0e02f0o78c49337";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <div className="Loading">
        <h2>Loading...</h2>
      </div>
    );
  }
}
