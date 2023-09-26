import React from "react";

import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/Kailhart/weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-sourced code
          </a>{" "}
          by Kateryna Peresta
        </footer>
      </div>
    </div>
  );
}
