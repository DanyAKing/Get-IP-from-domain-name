const express = require('express');
const cors = require('cors');
const { router } = require('./src/routes');

const app = express();

app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use('/', router);

app.listen(3000, '127.0.0.1', () => {
  console.log('Server started successfully!');
  console.log('Server working on port 3000,');
  console.log('visit 127.0.0.1:3000.');
});
