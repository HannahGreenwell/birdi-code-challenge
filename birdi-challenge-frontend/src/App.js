import React, { Component } from 'react';
import './App.css';

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
    event.prevent.default();
    const {lat, lng} = this.state;
    console.log(lat, lng);
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
