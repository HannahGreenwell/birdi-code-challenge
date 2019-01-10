DROP DATABASE IF EXISTS birdi_challenge;
CREATE DATABASE birdi_challenge;

\c birdi_challenge;


CREATE TABLE location (
  location_id SERIAL PRIMARY KEY,
  lat DECIMAL NOT NULL,
  lng DECIMAL NOT NULL
);

INSERT INTO location (lat, lng)
  VALUES
    (-33.886249, 151.200251),
    (-33.771841, 150.906187),
    (-33.798178, 151.184079),
    (22.327331, 114.171973);


CREATE TABLE weather (
  report_id SERIAL PRIMARY KEY,
  location_id INTEGER REFERENCES location (location_id),
  description VARCHAR(100),
  temp DECIMAL,
  wind_speed DECIMAL,
  chance_of_rain INTEGER,
  created_at TIMESTAMP
);


CREATE TABLE aircraft (
  aircraft_id SERIAL PRIMARY KEY,
  location_id INTEGER REFERENCES location (location_id),
  name VARCHAR(50),
  model VARCHAR(20),
  pilot VARCHAR(50),
  max_flight_time INTEGER,
  max_flight_range INTEGER
);

INSERT INTO aircraft (location_id, name, model, pilot, max_flight_time, max_flight_range)
  VALUES
    (1, 'DJI Mavic Air Drone', 'DJIMVCAIR-R', 'Homer Simpson', 59, 45),
    (1, 'DJI Inspire 2 RTF ', 'DJIINSPIRE2', 'Marge Simpson', 27, 30),
    (2, 'Immersion RC Vortex 250', 'BLH9250', 'Ned Flanders', 45, 40);
