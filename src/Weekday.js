import React from "react";

export default function Weekday(props) {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function addZero(number) {
    if (number < 10) {
      number = "0" + number;
    }
    return number;
  }
  let date = addZero(props.time.getDate());
  let month = addZero(props.time.getMonth() + 1);
  let weekday = weekdays[props.time.getDay()];

  return (
    <div className="Weekday">
      <h3 className="m-0">{weekday}</h3>
      <p className="date m-1">
        {date}.{month}
      </p>
    </div>
  );
}
