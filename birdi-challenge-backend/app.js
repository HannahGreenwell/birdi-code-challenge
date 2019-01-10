const express = require('express');
const app = express();
const port = 3000;

const indexRouter = require('./routes');
app.use('/', indexRouter);

// app.get('/weather', (request, response, next) => {
//   db.query('SELECT * FROM weather', (error, result) => {
//     if (error) {
//       return next(error);
//     }
//     response.send(result.rows);
//   });
// });

// app.get('/weather/:id', (request, response, next) => {
//   const { id } = request.params;
//
//   db.query('SELECT * FROM weather WHERE report_id = $1', [id], (error, result) => {
//     if (error) {
//       return next(error);
//     }
//     response.send(result.rows[0]);
//   });
// });


app.listen(port, () => {
  console.log(`Coming at you live from port ${port}!`);
});
