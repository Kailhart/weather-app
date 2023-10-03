import React from "react";

import DateLine from "./DateLine";
import WeatherDetails from "./WeatherDetails";

export default function Info(props) {
  return (
    <div className="Info">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <DateLine date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.descr}</li>
      </ul>
      <div className="row mt-3">
        <WeatherDetails data={props.data} />
      </div>
    </div>
  );
}
