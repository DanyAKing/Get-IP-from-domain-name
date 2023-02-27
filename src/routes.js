const express = require('express');
const { writeFile, readFile } = require('fs').promises;
const { checkDomain } = require('./app');
const { storage } = require('./data/storage');

const router = express.Router();

router
  .post('/send', async (req, res) => {
    const { data } = req.body;

    const returnData = await checkDomain(data);
    storage.push(returnData);
    await writeFile('./data/history.json', JSON.stringify(storage), {
      encoding: 'utf8',
    });

    res.status(200).json({ returnData });
  })
  .get('/get', async (req, res) => {
    const sendData = await readFile('./data/history.json', {
      encoding: 'utf8',
    });
    res.status(200).send(sendData);
  });

module.exports = { router };
