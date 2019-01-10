import React from 'react';

function AircraftDetails(props) {

  const { aircraft } = props;

  return (
    <div>
      <h2>Aircraft at Location</h2>
      {
        aircraft.map(a => {
          return (
            <div>
              <p><strong>{a.name}</strong></p>
              <p>Model: {a.model}</p>
              <p>Pilot: {a.pilot}</p>
              <p>Max flight time: {a.max_flight_time}mins</p>
              <p>Max flight range: {a.max_flight_range}kms</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default AircraftDetails;
