import React from "react";
import WeatherInfo from "./WeatherInfo";

export default function WeatherConversion(props) {
  return (
    <div className="weatherTemperature">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit">°C</span>
    </div>
  );
}
