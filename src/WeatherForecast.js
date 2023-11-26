import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import DayForecast from "./DayForecast";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.data.coordinates]);

  console.log(props);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    console.log(response.data);
  }
  if (loaded) {
    // console.log(forecast);
    return (
      <div className="WeatherForecast-day">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col-2" key={index}>
                  <DayForecast data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    const lat = props.data.coordinates.latitude; //35.6828387; //
    const lon = props.data.coordinates.longitude; // 139.7594549; //
    console.log(`Latitude: ${lat}, Longitude: ${lon}`);
    let apiKey = "4f10500b5at878ff8cc3c53cf761ba8o";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
