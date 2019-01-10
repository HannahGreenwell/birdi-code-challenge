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
  axios.get(`${BASE_URL}/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`)
  .then(response => {
    console.log(response.data)
  })
  .catch(error => {
    console.log(error);
  });

  // db.query(
  //   'SELECT * FROM location INNER JOIN weather ON weather.location_id = location.location_id WHERE lat = $1 AND lng = $2',
  //   [lat, lng],
  //   (error, result) => {
  //     if (error) {
  //       return next(error);
  //     }
  //     response.send(result.rows);
  // });

  response.send('HI');
});

router.get('/weather', (request, response, next) => {
  db.query('SELECT * FROM weather', (error, result) => {
    if (error) {
      return next(error);
    }
    response.send(result.rows);
  });
});

router.get('/weather/:id', (request, response, next) => {
  const { id } = request.params;

  db.query('SELECT * FROM weather WHERE report_id = $1', [id], (error, result) => {
    if (error) {
      return next(error);
    }
    response.send(result.rows[0]);
  });
});

module.exports = router;
