import React from "react";

export default function TimeLine(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return (
    <div className="DateLine">
      {day} {hours}:{minutes}
    </div>
  );
}
