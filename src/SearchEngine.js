import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [message, setMessaga] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});
  const [temperature, setTemperature] = useState(null);
  const [wind, setWind] = useState(null);

  function displayApiData(response) {
    setLoaded(true);
    console.log(response);
    setTemperature(response.data.temperature.current);
    setWind(response.data.wind.speed);
    setWeather({
      // temperature: response.data.temperature.current,
      //wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "4f10500b5at878ff8cc3c53cf761ba8o";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayApiData);
    setMessaga(
      <div className="row">
        <div>
          <h2>{city}</h2>
          <h3>Sunday 10:00</h3>
        </div>
        <div className="col-8 d-flex">
          <img
            src={weather.icon}
            alt="Weather description"
            className="float-left"
          />
          <h1 className="Main-temperature pt-4">
            {Math.round(temperature)} °C
          </h1>
        </div>
        <div className="col-4">
          <ul>
            <li>{weather.description}</li>
            <li>Humidity is {Math.round(weather.humidity)} %</li>
            <li>Wind speed is {Math.round(wind)} km/h</li>
          </ul>
        </div>
      </div>
    );
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit} className="Search-engine text-center">
      <input
        className="form-search m-2"
        type="search"
        placeholder="Type a city..."
        autoFocus={true}
        onChange={updateCity}
      />
      <input className="btn btn-primary p-2" type="submit" value="Search" />
    </form>
  );
  if (loaded) {
    return (
      <div className="container">
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
