const { dnsToIP } = require('./module');

const URL = 'www.npm.com';

const response = console.log(dnsToIP(URL));

module.exports = { response };
