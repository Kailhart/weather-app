import React, { useState } from "react";
import axios from "axios";

import "./Forecast.css";

import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let city = props.data.city;
  const [forecastReady, setForecastReady] = useState(false);
  const [forecastData, setForecastData] = useState();

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setForecastReady(false);
  }

  if (forecastReady) {
    return (
      <div className="Forecast">
        <div className="row mt-3">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} units={props.units} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "42c1087f21a779atb0e02f0o78c49337";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
