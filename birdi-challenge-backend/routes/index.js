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

  // makes a get request to the Open Weather api for the current weather
  axios.get(`${BASE_URL}/weather?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY}`)
  .then(res => {
    const description = res.data.weather.description;
    const temp = res.data.main.temp;
    const wind_speed = res.data.wind.speed;
    const created_at = new Date();

    // stores the weather data returned from the api request to the local database
    db.query(
      'INSERT INTO weather (lat, lng, description, temp, wind_speed, created_at) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [lat, lng, description, temp, wind_speed, created_at],
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

module.exports = router;
