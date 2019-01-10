const express = require('express');
const router = express.Router();
const axios = require('axios');

// require database adapter file
const db = require('../db');

// gives access to variables in .env
const dotenv = require('dotenv');
dotenv.config();

const API_KEY = process.env.OPEN_WEATHER_API;


// get request for the current weather
router.get('/weather/:lat/:lng', (request, response, next) => {
  const { lat, lng } = request.params;
  const BASE_URL = 'https://api.openweathermap.org/data/2.5';

  // makes a get request to the Open Weather API for the current weather
  axios.get(`${BASE_URL}/weather?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY}`)
  .then(res => {
    const temp = res.data.main.temp;
    const wind = res.data.wind.speed;

    // stores the weather data returned from the api request to the local database
    db.query(
      'INSERT INTO weather (location_id, temp, wind_speed) VALUES ($1, $2, $3) RETURNING *',
      [1, temp, wind],
      (error, result) => {
        if (error) {
          return next(error);
        }

        response.send(result.rows[0]);
      }
    );
  })
  .catch(error => {
    console.log(error);
  });
});


router.get('/weather', (request, response, next) => {
  db.query('SELECT * FROM weather', (error, result) => {
    if (error) {
      return next(error);
    }
    response.send(result.rows);
  });
});

module.exports = router;
