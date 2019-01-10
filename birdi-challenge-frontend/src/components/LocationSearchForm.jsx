import React from 'react';

class LocationSearchForm extends React.Component {

  constructor(props) {
    super(props);

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

    const { lat, lng } = this.state;
    this.props.onSubmit(lat, lng);
  }

  render() {

    const { lat, lng } = this.state;

    return (
      <div>
        <h3>Enter a location's coordinates to see its current weather and aircraft.</h3>

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

export default LocationSearchForm;
