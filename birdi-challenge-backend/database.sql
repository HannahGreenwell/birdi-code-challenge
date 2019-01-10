DROP DATABASE IF EXISTS birdi_challenge;
CREATE DATABASE birdi_challenge;

\c birdi_challenge;

CREATE TABLE location (
  lat DECIMAL,
  lng DECIMAL,
  PRIMARY KEY (lat, lng)
);

INSERT INTO location (lat, lng)
  VALUES (-33.886249, 151.200251);

CREATE TABLE weather (
  report_id SERIAL PRIMARY KEY,
  lat DECIMAL,
  lng DECIMAL,
  temp DECIMAL,
  wind_speed DECIMAL,
  chance_of_rain INTEGER,
  description VARCHAR(100),
  created_at TIMESTAMP,
  FOREIGN KEY (lat, lng) REFERENCES location (lat, lng)
);

INSERT INTO weather (lat, lng, temp, wind_speed, chance_of_rain, description, created_at)
  VALUES (-33.886249, 151.200251, 22.5, 15.2, 75, 'showers', current_timestamp);
