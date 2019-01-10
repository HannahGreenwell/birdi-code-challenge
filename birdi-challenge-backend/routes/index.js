const express = require('express');
const router = express.Router();
const axios = require('axios');

// require database adapter file
const db = require('../db');

// gives access to variables in .env
const dotenv = require('dotenv');
dotenv.config();

const API_KEY = process.env.OPEN_WEATHER_API;


// get request a location's current weather
router.get('/weather/:lat/:lng', (request, response) => {
  const { lat, lng } = request.params;
  const BASE_URL = 'https://api.openweathermap.org/data/2.5';

  // makes a get request to the Open Weather api for the current weather
  axios.get(`${BASE_URL}/weather?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY}`)
  .then(res => {
    const description = res.data.weather[0].description;
    const temp = res.data.main.temp;
    const wind_speed = res.data.wind.speed;
    const created_at = new Date();

    // select the corresponding location record
    // NOTE: this needs a check for locations not in the database
    db.query('SELECT location_id FROM location WHERE lat = $1 AND lng = $2', [lat, lng])
    .then(result => {
      const location_id = result.rows[0].location_id;

      // store the weather data returned from the api request to the local database
      db.query(
        'INSERT INTO weather (location_id, description, temp, wind_speed, created_at) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [location_id, description, temp, wind_speed, created_at])
      .then(result => response.send(result.rows[0]))
      .catch(error => setImmediate(() => { throw error }));
    });
  })
  .catch(error => setImmediate(() => { throw error }));
});


// get request for a location's historical weather (i.e. all corresponding weather records)
router.get('/weather/:lat/:lng/history', (request, response) => {
  const { lat, lng } = request.params;

  db.query(
    'SELECT * FROM weather INNER JOIN location ON location.location_id = weather.location_id WHERE lat = $1 AND lng = $2',
    [lat, lng]
  )
  .then(result => response.send(result.rows))
  .catch(error => setImmediate(() => { throw error}));
});

// get request for all aircrafts at a given location
// NOTE: need to change this to find all aircrafts within 100kms of a given location
router.get('/aircraft/:lat/:lng', (request, response) => {

  db.query(
    'SELECT * FROM aircraft INNER JOIN location ON location.location_id = aircraft.location_id WHERE lat = $1 AND lng = $2',
    [lat, lng]
  )
  .then(result => response.send(result.rows))
  .catch(error => setImmediate(() => { throw error}));
});

module.exports = router;
