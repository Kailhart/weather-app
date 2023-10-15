import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";
import TimeLine from "./TimeLine";
import WeatherDetails from "./WeatherDetails";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const defaultCity = "Berlin";
  const [city, setCity] = useState(defaultCity);

  function search() {
    const apiKey = "b400ae3b711a616262d18b0ca2cbe78f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temp: Math.round(response.data.main.temp),
      descr: response.data.weather[0].description,
      feelsLike: Math.round(response.data.main.feels_like),
      humid: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleInputChange(event) {
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
                onChange={handleInputChange}
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
          <li>
            <TimeLine date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.descr}</li>
        </ul>
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
