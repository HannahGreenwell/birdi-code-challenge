const express = require('express');
const app = express();
const port = 3000;

const db = require('./db');

app.get('/weather', (request, response, next) => {
  db.query('SELECT * FROM weather', (error, result) => {
    if (error) {
      return next(error);
    }
    response.send(result.rows);
  });
});

app.get('/', (request, response) => response.json({status: "ok"}));

app.listen(port, () => {
  console.log(`Coming at you live from port ${port}!`);
});
