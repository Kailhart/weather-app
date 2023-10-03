import React from "react";

import DateLine from "./DateLine";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <DateLine date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.descr}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <WeatherIcon data={props.data} />
          <span className="temperature">{props.data.temp}</span>
          <span className="temp-unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like: {props.data.feelsLike}°C</li>
            <li>Humidity: {props.data.humid}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
