DROP DATABASE IF EXISTS birdi_challenge;
CREATE DATABASE birdi_challenge;

\c birdi_challenge;

CREATE TABLE location (
  location_id SERIAL PRIMARY KEY,
  lat DECIMAL NOT NULL,
  lng DECIMAL NOT NULL
);

INSERT INTO location (lat, lng)
  VALUES (-33.886249, 151.200251);

CREATE TABLE weather (
  report_id SERIAL PRIMARY KEY,
  location_id INTEGER REFERENCES location,
  temp DECIMAL,
  wind_speed DECIMAL,
  chance_of_rain INTEGER,
  description VARCHAR(100),
  created_at TIMESTAMP
);

INSERT INTO weather (location_id, temp, wind_speed, chance_of_rain, description, created_at)
  VALUES (1, 22.5, 15.2, 75, 'showers', current_timestamp);
