import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./SearchEngine.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({ loaded: false });

  function displayApiData(response) {
    console.log(response);
    setWeather({
      loaded: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      //date: new Date(1700677492 * 1000),
      date: new Date(response.data.time * 1000),
    });
  }

  function Search() {
    const apiKey = "4f10500b5at878ff8cc3c53cf761ba8o";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayApiData);
  }
  function handleSubmit(event) {
    event.preventDefault();
    Search();
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
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    return (
      <div>
        Search();
        <p>Loading...</p>
      </div>
    );
  }
}
