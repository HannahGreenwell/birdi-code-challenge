import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import LocationSearchForm from './components/LocationSearchForm';
import WeatherDetails from './components/WeatherDetails';
import AircraftDetails from './components/AircraftDetails';

class App extends Component {
  constructor() {
    super();

    this.state = {
      weather: {},
      aircraft: []
    };
  }

  handleSubmit = (lat, lng) => {
    const BASE_URL = 'http://www.localhost:3000';
    axios.get(`${BASE_URL}/weather/${lat}/${lng}`)
    .then(response => {
      this.setState({
        weather: response.data
      });
    })
    .catch(console.warn);

    axios.get(`${BASE_URL}/aircraft/${lat}/${lng}`)
    .then(response => {
      this.setState({
        aircraft: response.data
      });
    })
    .catch(console.warn);
  }

  render() {

    const { weather, aircraft } = this.state;

    return (
      <div className="App">
        <h1>Birdi Code Challenge</h1>

        <LocationSearchForm onSubmit={this.handleSubmit} />

        <WeatherDetails weather={weather} />

        <AircraftDetails aircraft={aircraft} />
      </div>
    );
  }
}

export default App;
