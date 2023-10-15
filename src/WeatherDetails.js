import React, { useState } from "react";

import "./WeatherDetails.css";

import TimeLine from "./TimeLine";
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
      <div className="WeatherDetails">
        <div className="row mt-1 g-0">
          <div className="info ms-2 col">
            <h1>{props.data.city}</h1>
            <ul>
              <li>
                <TimeLine date={props.data.date} />
              </li>
              <li className="text-capitalize">{props.data.descr}</li>
            </ul>
          </div>
          <div className="current ps-3 pe-2 py-2 col-7">
            <div className="temp-line mt-2 mb-3">
              <WeatherIcon data={props.data} />
              <span className="temperature">{props.data.temp}°</span>
              <span className="temp-unit">
                <span className="left" id="active">
                  C
                </span>
                <span onClick={showFahr} className="right">
                  F
                </span>
              </span>
            </div>
            <ul>
              <li>Feels like: {props.data.feelsLike}°C</li>
              <li>Humidity: {props.data.humid}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
        <Forecast data={props.data} units={unit} />
      </div>
    );
  } else {
    return (
      <div className="WeatherDetails">
        <div className="row mt-1 g-0">
          <div className="info ms-2 col">
            <h1>{props.data.city}</h1>
            <ul>
              <li>
                <TimeLine date={props.data.date} />
              </li>
              <li className="text-capitalize">{props.data.descr}</li>
            </ul>
          </div>
          <div className="current ps-3 pe-2 py-2 col-7">
            <div className="temp-line mt-2 mb-3">
              <WeatherIcon data={props.data} />
              <span className="temperature">{convert(props.data.temp)}°</span>
              <span className="temp-unit">
                <span className="left" id="active">
                  F
                </span>
                <span onClick={showCels} className="right">
                  C
                </span>
              </span>
            </div>
            <ul>
              <li>Feels like: {convert(props.data.feelsLike)}°F</li>
              <li>Humidity: {props.data.humid}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
        <Forecast data={props.data} units={unit} />
      </div>
    );
  }
}
