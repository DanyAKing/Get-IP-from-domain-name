const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Server NodeJS Express')
});

app.listen(3000, '127.0.0.1', () => {
  console.log('Server working, visit 127.0.0.1:3000.');
});
