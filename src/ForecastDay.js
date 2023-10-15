import React from "react";

import WeatherIcon from "./WeatherIcon";
import Weekday from "./Weekday";

export default function ForecastDay(props) {
  let units = props.units;
  let forecastData = {
    tempMax: Math.round(props.data.temperature.maximum),
    tempMin: Math.round(props.data.temperature.minimum),
    descr: props.data.condition.description,
    icon: props.data.condition.icon,
    time: new Date(props.data.time * 1000),
  };

  function convert(temp) {
    let tempFahr = Math.round((temp * 9) / 5 + 32);
    return tempFahr;
  }

  if (units === "metric") {
    return (
      <div className="Forecast">
        <Weekday time={forecastData.time} />
        <WeatherIcon data={forecastData} />
        <div className="temp-max">{forecastData.tempMax}°C</div>
        <div className="temp-min">{forecastData.tempMin}°C</div>
      </div>
    );
  } else {
    return (
      <div className="Forecast">
        <Weekday time={forecastData.time} />
        <WeatherIcon data={forecastData} />
        <div className="temp-max">{convert(forecastData.tempMax)}°F</div>
        <div className="temp-min">{convert(forecastData.tempMin)}°F</div>
      </div>
    );
  }
}
