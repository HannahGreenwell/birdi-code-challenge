const express = require('express');
const app = express();
const port = 3000;

// allows for cross-origin resource sharing between frontend and backend
const cors = require('cors');
app.use(cors());

// access routes in ./routes/index.js
const indexRouter = require('./routes');
app.use('/', indexRouter);

// start the server
app.listen(port, () => {
  console.log(`Coming at you live from port ${port}!`);
});
