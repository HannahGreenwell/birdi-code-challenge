import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      lat: '',
      lng: ''
    };
  }

  handleChange = event => {
    const {name, value} = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const {lat, lng} = this.state;

    axios.get(`http://www.localhost:3000/weather/${lat}/${lng}`)
    .then(response => {
      console.log(response);
    })
    .catch(console.warn);
  }

  render() {

    const {lat, lng} = this.state;

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Latitude:</label>
            <input
              type="text"
              name="lat"
              value={lat}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Longitude:</label>
            <input
              type="text"
              name="lng"
              value={lng}
              onChange={this.handleChange}
            />
          </div>

          <input
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default App;
