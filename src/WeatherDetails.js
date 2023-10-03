import React, { useState } from "react";

import WeatherIcon from "./WeatherIcon";

export default function WeatherDetails(props) {
  const [unit, setUnit] = useState("celsius");

  function showCels(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahr(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convert(temp) {
    let tempFahr = Math.round((temp * 9) / 5 + 32);
    return tempFahr;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherDetails row">
        <div className="col-6">
          <WeatherIcon data={props.data} />
          <span className="temperature">{props.data.temp}</span>
          <span className="temp-unit">
            °C |{" "}
            <a href="#" onClick={showFahr}>
              °F
            </a>
          </span>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like: {props.data.feelsLike}°C</li>
            <li>Humidity: {props.data.humid}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherDetails row">
        <div className="col-6">
          <WeatherIcon data={props.data} />
          <span className="temperature">{convert(props.data.temp)}</span>
          <span className="temp-unit">
            <a href="#" onClick={showCels}>
              °C
            </a>{" "}
            | °F
          </span>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like: {convert(props.data.feelsLike)}°F</li>
            <li>Humidity: {props.data.humid}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    );
  }
}
