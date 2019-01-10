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
    (-33.798178, 151.184079);

CREATE TABLE weather (
  report_id SERIAL PRIMARY KEY,
  location_id INTEGER REFERENCES location (location_id),
  temp DECIMAL,
  wind_speed DECIMAL,
  chance_of_rain INTEGER,
  description VARCHAR(100),
  created_at TIMESTAMP
);

INSERT INTO weather (location_id, temp, wind_speed, chance_of_rain, description, created_at)
  VALUES
    (1, 22.5, 15.2, 75, 'showers', current_timestamp),
    (2, 25.5, 13.8, 68, 'cloudy', current_timestamp),
    (3, 21.2, 16.6, 88, 'showers', current_timestamp);
