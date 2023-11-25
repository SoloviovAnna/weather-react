import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-2">
          <div className="WeatherForecast-day"></div>
          <WeatherIcon data="mist-night" />
          <div className="WeatherForecast-temperature">Fri</div>
          <span className="WeatherForecast-temperature-max">5°</span>
          <span className="WeatherForecast-temperature-min">-1°</span>
        </div>
      </div>
    </div>
  );
}
