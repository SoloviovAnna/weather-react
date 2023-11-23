import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherConversion from "./WeatherConversion";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="m-3">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-8 d-flex">
          <img
            src={props.data.icon_url}
            alt="Weather description"
            className="float-left"
          />
          <div className="pt-4">
            <WeatherConversion celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-4">
          <ul>
            <li>Humidity is {Math.round(props.data.humidity)} %</li>
            <li>Wind speed is {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
