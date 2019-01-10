const express = require('express');
const app = express();
const port = 3000;

// access routes in ./routes/index.js
const indexRouter = require('./routes');
app.use('/', indexRouter);

// start the server
app.listen(port, () => {
  console.log(`Coming at you live from port ${port}!`);
});
