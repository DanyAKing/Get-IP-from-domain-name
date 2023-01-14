const express = require('express');
const cors = require('cors');

const app = express();
const history = [];

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome in web server NodeJS Express');
});

app.post('/history', (req, res) => {
  history.push(...req.body);
  console.log(history);
  res.status(200).end();
});

app.listen(3000, () => {
  console.log('Server working on 3000 port, visit 127.0.0.1:3000.');
});
