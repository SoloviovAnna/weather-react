import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
export default function WeatherIcon(props) {
  codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
  };
  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="#885DF1"
      size={64}
      animate={true}
    />
  );
}
