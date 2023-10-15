import React, { useState } from "react";

import WeatherIcon from "./WeatherIcon";
import Forecast from "./Forecast";

export default function WeatherDetails(props) {
  const [unit, setUnit] = useState("metric");

  function showCels(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function showFahr(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function convert(temp) {
    let tempFahr = Math.round((temp * 9) / 5 + 32);
    return tempFahr;
  }

  if (unit === "metric") {
    return (
      <div className="WeatherDetails row mt-3">
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
        <div className="row">
          <Forecast data={props.data} day={"0"} units={unit} />
          <Forecast data={props.data} day={"1"} units={unit} />
          <Forecast data={props.data} day={"2"} units={unit} />
          <Forecast data={props.data} day={"3"} units={unit} />
          <Forecast data={props.data} day={"4"} units={unit} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherDetails row mt-3">
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
        <div className="row">
          <Forecast data={props.data} day={"0"} units={unit} />
          <Forecast data={props.data} day={"1"} units={unit} />
          <Forecast data={props.data} day={"2"} units={unit} />
          <Forecast data={props.data} day={"3"} units={unit} />
          <Forecast data={props.data} day={"4"} units={unit} />
        </div>
      </div>
    );
  }
}
