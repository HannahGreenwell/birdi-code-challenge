import React from 'react';

function WeatherDetails(props) {

  const { description, temp, wind_speed } = props.weather;

  return (
    <div>
      <h2>Current Weather</h2>
      <p>Description: { description }</p>
      <p>Current temperature: { temp } degrees</p>
      <p>Wind speed: { wind_speed } km/h</p>
    </div>
  );
}

export default WeatherDetails;
