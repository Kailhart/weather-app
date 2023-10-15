import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";
import Info from "./Info";
import WeatherDetails from "./WeatherDetails";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const defaultCity = "Berlin";
  const [city, setCity] = useState(defaultCity);

  function search() {
    const apiKey = "42c1087f21a779atb0e02f0o78c49337";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temp: Math.round(response.data.temperature.current),
      descr: response.data.condition.description,
      feelsLike: Math.round(response.data.temperature.feels_like),
      humid: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form id="search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
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
        <Info data={weatherData} />
        <WeatherDetails data={weatherData} />
      </div>
    );
  } else {
    search();
    return (
      <div className="Loading">
        <h2>Loading...</h2>
      </div>
    );
  }
}
