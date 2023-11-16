import React, { useState } from "react";
import { Audio } from "react-loader-spinner";
import axios from "axios";

function Weather(props) {
  let [temperature, setTemperature] = useState(null);

  function displayTemperature(response) {
    setTemperature(response.data.temperature.current);
    console.log(response.data.temperature.current);
  }

  if (temperature !== null) {
    return (
      <div>
        <h1>Hello from React</h1>
        <h2>
          The weather in {props.city} is {Math.round(temperature)} °C
        </h2>
        <Audio
          height="80"
          width="80"
          radius="9"
          color="white"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    );
  } else {
    let apiKey = "4f10500b5at878ff8cc3c53cf761ba8o";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
    <div>
      <p>Loading temperature in {props.city}</p>;
    </div>;
  }
}
export default Weather;
