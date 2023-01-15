const express = require('express');
const cors = require('cors');
// const { checkDomain } = require('../js/lookup_dns_app');

const app = express();
let history = [];

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Welcome in web server NodeJS Express</h1>');
});

app.post('/history', (req, res) => {
  history = [];
  history.push(...req.body);
  console.log(history);
  res.status(200).end();
});

app.get('/history', (req, res) => {
  res.json(history);
});

app.listen(3000, () => {
  console.log('Server start successful!');
  console.log('Server working on port 3000,');
  console.log('visit 127.0.0.1:3000.');
});
