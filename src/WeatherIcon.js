import React from "react";

import "./WeatherIcon.css"

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "01d",
    "few-clouds-day": "02d",
    "scattered-clouds-day": "03d",
    "broken-clouds-day": "04d",
    "shower-rain-day": "05d",
    "rain-day": "06d",
    "thunderstorm-day": "07d",
    "snow-day": "08d",
    "mist-day": "09d",
    "clear-sky-night": "01n",
    "few-clouds-night": "02n",
    "scattered-clouds-night": "03n",
    "broken-clouds-night": "04n",
    "shower-rain-night": "05n",
    "rain-night": "06n",
    "thunderstorm-night": "07n",
    "snow-night": "08n",
    "mist-night": "09n",
  };
  let iconLink = `/images/${codeMapping[props.data.icon]}.png`;
  return (
    <div className="WeatherIcon">
      <img src={iconLink} alt={props.data.descr} />
    </div>
  );
}
