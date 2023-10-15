import React, { useState } from "react";
import axios from "axios";

import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  let day = props.day;
  let city = props.data.city;
  let units = props.units;
  const [forecastData, setForecastData] = useState({ ready: false });

  function convert(temp) {
    let tempFahr = Math.round((temp * 9) / 5 + 32);
    return tempFahr;
  }

  function handleResponse(response) {
    setForecastData({
      ready: true,
      tempMax: Math.round(response.data.daily[day].temperature.maximum),
      tempMin: Math.round(response.data.daily[day].temperature.minimum),
      descr: response.data.daily[day].condition.description,
      icon: response.data.daily[day].condition.icon,
      time: response.data.daily[day].time,
    });
  }

  if (props.data.ready && forecastData.ready === false) {
    let apiKey = "42c1087f21a779atb0e02f0o78c49337";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  } else {
    if (units === "metric") {
      return (
        <div className="Forecast">
          <div className="col">
            <h3 className="day">Thu</h3>
            <WeatherIcon data={forecastData} />
            <div className="temp-max">{forecastData.tempMax}°C</div>
            <div className="temp-min">{forecastData.tempMin}°C</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Forecast">
          <div className="col">
            <h3 className="day">Thu</h3>
            <WeatherIcon data={forecastData} />
            <div className="temp-max">{convert(forecastData.tempMax)}°F</div>
            <div className="temp-min">{convert(forecastData.tempMin)}°F</div>
          </div>
        </div>
      );
    }
  }
}
