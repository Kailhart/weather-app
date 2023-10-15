import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Forecast.css";

import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  const [forecastReady, setForecastReady] = useState(false);
  const [forecastData, setForecastData] = useState();

  useEffect(() => {
    setForecastReady(false);
  }, [props.data]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setForecastReady(true);
  }

  function getForecast() {
    let apiKey = "96771e971243152d6b8948878c26adde";
    let lat = props.data.lat;
    let lon = props.data.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,current&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (forecastReady) {
    return (
      <div className="Forecast">
        <div className="row mt-3 m-0-auto">
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
    getForecast();
    return null;
  }
}
