const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.json({status: "ok"}));

app.listen(port, () => console.log(`Coming at you live from port ${port}!`));
