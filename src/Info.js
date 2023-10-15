import React from "react";

import TimeLine from "./TimeLine";

export default function Info(props) {
  return (
    <div className="Info">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <TimeLine date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.descr}</li>
      </ul>
    </div>
  );
}
