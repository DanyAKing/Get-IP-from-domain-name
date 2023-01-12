const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome in web server NodeJS Express');
});

app.post('/history', (req, res) => {
  console.log(req.body);
  res.status(200).end();
});

app.listen(3000, '127.0.0.1', () => {
  console.log('Server working, visit 127.0.0.1:3000.');
});
