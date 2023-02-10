const express = require('express');
const { checkDomain } = require('../public/js/lookup_dns_app');
const { Storage } = require('../public/js/storage');

const router = express.Router();
const storage = new Storage();

router
  .post('/send', async (req, res) => {
    const { data } = req.body;

    checkDomain(data, storage.list);
    console.log(storage);
    // const returnData = storage.list;

    // res.status(200).json({ returnData });
  });

module.exports = { router };
