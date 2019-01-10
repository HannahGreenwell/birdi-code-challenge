const express = require('express');
const router = express.Router();

// require database adapter file
const db = require('../db');

router.get('/', (request, response) => response.json({ status: "ok" }));

router.get('/weather/:lat/:lng', (request, response) => {
  console.log(request.params);
  response.send('HI!');
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
