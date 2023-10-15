import React from "react";

import "./WeatherIcon.css";

export default function WeatherIcon(props) {
  let iconLink = `/images/${props.data.icon}.png`;
  return (
    <div className="WeatherIcon">
      <img src={iconLink} alt={props.data.descr} />
    </div>
  );
}
