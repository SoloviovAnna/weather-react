import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function DayForecast(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast">
        <div className="WeatherForecast-day">{day()}</div>
        <div className="WeatherForecast-icon">
          <WeatherIcon data={props.data.condition.icon} />
        </div>
        <span className="WeatherForecast-temperature-max">
          {Math.round(props.data.temperature.maximum)}°C
        </span>
        <span className="WeatherForecast-temperature-min">
          {Math.round(props.data.temperature.minimum)}°C
        </span>
      </div>
    </div>
  );
}
