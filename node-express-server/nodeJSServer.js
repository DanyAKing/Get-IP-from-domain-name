const express = require('express');
const { response } = require('../src/index');

const app = express();

app.get('/', (req, res) => {
  res.send(response);
});

app.listen(3000, () => {
  console.log('Server working, listening on port 3000');
});
