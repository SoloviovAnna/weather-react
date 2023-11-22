import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./SearchEngine.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [message, setMessaga] = useState(null);
  const [weather, setWeather] = useState({ loaded: false });

  function displayApiData(response) {
    setWeather({
      loaded: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      date: new Date(1700677492 * 1000),
      //date: new Date(response.data.time * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "4f10500b5at878ff8cc3c53cf761ba8o";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayApiData);
    setMessaga(
      <div>
        <div className="m-3">
          <h1>{city}</h1>
          <ul>
            <li>
              <FormattedDate date={weather.date} />
            </li>
            <li className="text-capitalize">{weather.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-8 d-flex">
            <img
              src={weather.icon}
              alt="Weather description"
              className="float-left"
            />
            <div className="pt-4">
              <span className="temperature">
                {Math.round(weather.temperature)}{" "}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-4">
            <ul>
              <li>Humidity is {Math.round(weather.humidity)} %</li>
              <li>Wind speed is {Math.round(weather.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit} className="input-group text-center m-2">
      <input
        className="form-control rounded m-1"
        type="search"
        placeholder="Enter a city..."
        autoFocus="on"
        onChange={updateCity}
      />
      <button className="btn btn-primary m-1 rounded" type="submit">
        Search
      </button>
      <button className="btn btn-success m-1 rounded" type="submit">
        Current
      </button>
    </form>
  );
  if (weather.loaded) {
    return (
      <div className=" SearchEngine container">
        {form}
        <p>{message}</p>
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <p>{message}</p>
      </div>
    );
  }
}
