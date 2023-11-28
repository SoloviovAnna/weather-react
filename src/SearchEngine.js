import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./SearchEngine.css";
import WeatherForecast from "./WeatherForecast";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ loaded: false });

  function displayApiData(response) {
    console.log(response.data.temperature);
    setWeather({
      loaded: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      icon_url: response.data.condition.icon_url,
      icon: response.data.condition.icon,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      country: response.data.country,
      date: new Date(response.data.time * 1000),
    });
  }
  function displayCurrentApiData(response) {
    //console.log(response);
    setWeather({
      loaded: true,
      coordinates: response.data.coordinates,
      temperature: response.data.daily[0].temperature.day,
      wind: response.data.daily[0].wind.speed,
      icon_url: response.data.daily[0].condition.icon_url,
      icon: response.data.daily[0].condition.icon,
      description: response.data.daily[0].condition.description,
      humidity: response.data.daily[0].temperature.humidity,
      city: response.data.city,
      country: response.data.country,
      date: new Date(response.data.daily[0].time * 1000),
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
  function getPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(`Latitude: ${lat}, Longitude: ${lon}`);
    let apiKey = "4f10500b5at878ff8cc3c53cf761ba8o";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayCurrentApiData);
  }

  function getCurrentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getPosition);
  }
  let form = (
    <form
      onSubmit={handleSubmit}
      className="input-group text-center m-2 mr-8 ml-0"
    >
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
      <button
        className="btn btn-success m-1 rounded pr-2"
        type="submit"
        onClick={getCurrentPosition}
      >
        Current
      </button>
    </form>
  );
  if (weather.loaded) {
    return (
      <div className="SearchEngine mb-0">
        {form}
        <WeatherInfo data={weather} />
        <div className="Forecast">
          <WeatherForecast data={weather} />
        </div>
      </div>
    );
  } else {
    Search();
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
}
