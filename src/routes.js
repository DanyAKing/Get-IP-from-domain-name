const express = require('express');
const { checkDomain } = require('./app');
// const { storage } = require('./storage');

const router = express.Router();

router
  .post('/send', async (req, res) => {
    const { data } = req.body;

    const returnData = await checkDomain(data);
    console.log(returnData);

    res.status(200).json({ returnData });
  });

module.exports = { router };
